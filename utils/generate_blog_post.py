"""
Daily blog post generator for nervousmarlin.com

Generates a unique, SEO-optimized article every day using Anthropic Claude,
inserts it into content.js, and tracks used topics to avoid repetition.

Usage:
  ANTHROPIC_API_KEY=sk-ant-... python utils/generate_blog_post.py

GitHub Actions runs this automatically every day and pushes the change,
which triggers a Vercel rebuild and deployment.
"""

import os
import json
import re
import random
from datetime import datetime
import anthropic

# ─── Paths ────────────────────────────────────────────────────────────────────

TOPICS_HISTORY_PATH = "utils/topics_history.json"
CONTENT_JS_PATH = "app/blog/_assets/content.js"

# ─── Topic pool ───────────────────────────────────────────────────────────────
# Broad categories that rotate so articles stay diverse. The AI picks a fresh
# angle within the chosen category each time.

TOPIC_CATEGORIES = [
    "Blue marlin fishing techniques, tackle, and strategy",
    "Marine biology — species found off the Bahia coast (wahoo, sailfish, dorado, tuna, sharks, etc.)",
    "Arraial d'Ajuda as a travel destination — beaches, culture, nightlife, restaurants",
    "Activities for non-anglers at Nervous Marlin (paragliding, scuba diving, whale watching, ATV, spa, beach biking)",
    "Big-game fishing gear & equipment deep-dives (rods, reels, lines, lures, outriggers, fighting chairs)",
    "Best seasons and weather windows for fishing in Bahia",
    "World fishing records and legendary catches",
    "Sustainable fishing and ocean conservation",
    "Travel planning & logistics for visiting Brazil (visas, flights, what to pack)",
    "Brazilian food, caipirinha culture, and lodge cuisine",
    "Fishing photography — tips for capturing the perfect catch shot",
    "Physical conditioning and preparation for offshore fishing",
    "What to expect on your first marlin charter — a first-timer's guide",
    "Comparing Bahia to other top big-game fishing destinations worldwide",
    "Ocean navigation, weather reading, and safety at sea",
    "Whale watching and humpback whale season off Arraial d'Ajuda",
    "Family and multi-generational fishing vacations",
    "The history and tradition of marlin fishing in Brazil",
    "Luxury lodge experience — rooms, amenities, and what sets Nervous Marlin apart",
    "Night fishing, trolling patterns, and advanced offshore tactics",
    "Kids and junior angling — raising the next generation of anglers",
    "Catch-and-release best practices for billfish",
    "The thrill of sailfish on light tackle",
    "Drone fishing and modern technology on the water",
    "Fishing knots every angler must know",
    "Royal Charlotte Bank — the legendary seamount off Bahia",
    "Planning the perfect couples' fishing getaway",
    "Sport fishing tournaments and competitive angling culture",
    "Dolphins, manta rays, and wildlife encounters while offshore",
    "The science of reading the water — currents, color breaks, temperature",
]

# ─── Helpers ──────────────────────────────────────────────────────────────────

def load_topics_history():
    if os.path.exists(TOPICS_HISTORY_PATH):
        with open(TOPICS_HISTORY_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    return {"used_titles": [], "used_categories": [], "total_articles": 0}


def save_topics_history(history):
    with open(TOPICS_HISTORY_PATH, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2, ensure_ascii=False)


def slugify(text):
    text = text.lower()
    text = re.sub(r"[^\w\s-]", "", text).strip()
    return re.sub(r"[\s_]+", "-", text)


def sanitize_js_string(s):
    """Escape characters that would break a JS double-quoted string literal."""
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    return s


# ─── AI calls ─────────────────────────────────────────────────────────────────

def generate_topic(client, history):
    """Ask the AI to propose a specific, fresh article topic."""
    used_titles = history.get("used_titles", [])
    used_categories = history.get("used_categories", [])

    # Rotate categories — avoid the last 6 that were used
    recent_categories = set(used_categories[-6:])
    available = [c for c in TOPIC_CATEGORIES if c not in recent_categories]
    if not available:
        available = TOPIC_CATEGORIES
    category = random.choice(available)

    # Show the AI the last 30 written titles so it avoids overlap
    recent_titles = used_titles[-30:]
    used_str = (
        "\n".join(f"- {t}" for t in recent_titles) if recent_titles else "None yet."
    )

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=512,
        system=(
            "You are an SEO content strategist for Nervous Marlin, a luxury blue marlin "
            "fishing lodge in Arraial d'Ajuda, Bahia, Brazil. Generate specific, creative, "
            "and SEO-friendly blog article topics that are genuinely useful to the reader. "
            "Always respond with valid JSON only — no prose, no markdown fences."
        ),
        messages=[
            {
                "role": "user",
                "content": (
                    f'Generate ONE unique blog article topic in the category: "{category}"\n\n'
                    "The blog is for Nervous Marlin fishing lodge (nervousmarlin.com). The lodge offers:\n"
                    "- Blue marlin, sailfish, wahoo, dorado, and tuna fishing off Arraial d'Ajuda\n"
                    "- Activities: paragliding, scuba diving, whale watching, ATV, beach biking, spa\n"
                    "- Luxury accommodation with Brazilian hospitality in southern Bahia\n\n"
                    "RECENTLY PUBLISHED TITLES — do NOT repeat these topics:\n"
                    f"{used_str}\n\n"
                    "Return ONLY valid JSON with these exact keys:\n"
                    '{"topic": "...", "seo_keyword": "...", "category": "..."}'
                ),
            },
        ],
    )

    data = json.loads(response.content[0].text)
    data["category"] = category  # ensure the category we chose is recorded
    return data


def generate_article(client, topic_data):
    """Generate a full blog article as JSX-compatible content."""
    topic = topic_data["topic"]
    keyword = topic_data["seo_keyword"]

    jsx_rules = """
CRITICAL JSX FORMATTING RULES (the output is injected directly into a .js React file):
- The jsx_content must be a valid JSX fragment body (do NOT wrap it in <> </>).
- First element must be: <h1>{title}</h1>
- Section headings: <h3><strong>Section Title</strong></h3>
- Paragraphs: <p>text</p>
- Bullet lists: <ul><li>item</li></ul>
- Links to Nervous Marlin: <a href="https://nervousmarlin.com" className="underline font-bold">Nervous Marlin</a>
- Links to booking page: <a href="https://nervousmarlin.com/book-now" className="underline font-bold">book your trip</a>
- NEVER use apostrophe ' in text — always write &apos; instead.
- NEVER use raw " in text content — write &quot; instead.
- NEVER use class= — always className=.
- NEVER add style= attributes.
- NEVER use { or } in text content.
- Self-close void elements: <br /> not <br>.
- Do NOT use markdown (no **, no ##, no *).
- Write 650–900 words of real, engaging content."""

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=4096,
        system=(
            "You are an expert SEO content writer for Nervous Marlin, a luxury blue marlin "
            "fishing lodge in Arraial d'Ajuda, Bahia, Brazil. Write blog articles that are "
            "genuinely informative and engaging, naturally mentioning the lodge without being "
            "overly promotional. Write for both avid anglers and curious travellers. "
            "Always respond with valid JSON only — no prose, no markdown fences."
            + jsx_rules
        ),
        messages=[
            {
                "role": "user",
                "content": (
                    f"Write a blog article about: {topic}\n"
                    f"Primary SEO keyword to naturally include: {keyword}\n\n"
                    "Return ONLY valid JSON with these exact keys:\n"
                    '{"title": "...", "description": "...", "jsx_content": "..."}\n\n'
                    "description = 150-160 character meta description.\n"
                    "jsx_content = the full JSX body (see rules above)."
                ),
            },
        ],
    )

    return json.loads(response.content[0].text)


# ─── content.js insertion ─────────────────────────────────────────────────────

def add_article_to_content_js(title, description, jsx_content):
    with open(CONTENT_JS_PATH, "r", encoding="utf-8") as f:
        content_js = f.read()

    slug = slugify(title)
    today = datetime.now().strftime("%Y-%m-%d")

    safe_title = sanitize_js_string(title)
    safe_description = sanitize_js_string(description)

    # Build the article block to insert
    new_article = (
        "\n  {\n"
        f'    slug: "{slug}",\n'
        f'    title: "{safe_title}",\n'
        f'    description: "{safe_description}",\n'
        "    author: authors.find((author) => author.slug === authorSlugs.alex),\n"
        f'    publishedAt: "{today}",\n'
        "    content: (\n"
        "      <>\n"
        f"        {jsx_content}\n"
        "      </>\n"
        "    ),\n"
        "  },\n"
    )

    # Insert right after the opening bracket of the articles array
    marker = "export const articles = ["
    articles_start = content_js.find(marker)
    if articles_start == -1:
        raise ValueError("Could not find 'export const articles = [' in content.js")
    insert_position = content_js.find("[", articles_start) + 1

    updated = content_js[:insert_position] + new_article + content_js[insert_position:]

    with open(CONTENT_JS_PATH, "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"Article inserted into content.js: {title}")
    return slug


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        raise EnvironmentError(
            "ANTHROPIC_API_KEY is not set. "
            "Export it in your shell or add it as a GitHub Actions secret."
        )

    client = anthropic.Anthropic(api_key=api_key)

    # 1. Load topic history
    history = load_topics_history()
    print(f"Topics history: {history['total_articles']} articles generated so far.")

    # 2. Generate a fresh, unique topic
    print("Generating topic with AI...")
    topic_data = generate_topic(client, history)
    print(f"  Topic    : {topic_data['topic']}")
    print(f"  Keyword  : {topic_data['seo_keyword']}")
    print(f"  Category : {topic_data['category']}")

    # 3. Generate the full article
    print("Generating article with AI...")
    article_data = generate_article(client, topic_data)

    title = article_data["title"]
    description = article_data["description"]
    jsx_content = article_data["jsx_content"]

    print(f"  Title    : {title}")
    print(f"  Desc     : {description[:80]}...")

    # 4. Insert into content.js
    slug = add_article_to_content_js(title, description, jsx_content)
    print(f"  Slug     : {slug}")

    # 5. Persist topic history (keep last 60 titles to avoid context blow-up)
    history["used_titles"].append(title)
    history["used_categories"].append(topic_data["category"])
    history["total_articles"] = history.get("total_articles", 0) + 1
    if len(history["used_titles"]) > 60:
        history["used_titles"] = history["used_titles"][-60:]

    save_topics_history(history)
    print("Topics history updated.")
    print("Done!")


if __name__ == "__main__":
    main()
