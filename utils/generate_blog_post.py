import random
import os
from datetime import datetime
import re
from openai import OpenAI
import json

def slugify(text):
    text = text.lower()
    return re.sub(r'[^\w\s-]', '', text).strip().replace(' ', '-')

def read_keywords(file_path):
    with open(file_path, 'r') as file:
        return [line.strip() for line in file if line.strip()]

def generate_blog_post(keyword):
    prompt = f"""Generate a compelling blog post title and content about '{keyword}'. 
    Be creative with the title, it should be catchy and engaging and SEO-friendly.
    Optimize the blog post content for SEO. It will be used on the blog section of nervousmarlin.com, a Next.js website.
    The content should be in HTML format so that I can use it directly, excluding the outer <html>, <head>, and <body> tags, as I already have the page structure.
    Make sure to add a title within <h1> tags. 
    Any other headers in the blog content should always be within both combined <h3> and <strong> tags. Do not use ** to put text inside.
    Never start your reply with '''html.
    If there are any apostrophes, replace them with &apos;
    When you provide a link to nervousmarlin.com, make sure it is bolded, underlined and redirects to nervousmarlin.com using the <a> tag.
    Don't be too pushy with mentioning nervousmarlin.com, make the article feel natural and not like an advertisement.
    Do not use style attributes, just use tags."""
    client = OpenAI(api_key="sk-proj-ZWZVp9jM0e3SqUQQELX8T3BlbkFJ8fDmikeoI9FKtTqsM36B")
    response = client.chat.completions.create(
        model="o1-mini",
        messages=[
            #{  Not available in o1-preview
                #"role": "system", 
                #"content": "You are a SEO content writer that generates SEO-optimized blog posts for Nervous Marlin, a Blue Marlin fishing lodge located in Arraial d'Ajuda, Bahia, Brazil. The lodge also offers activities for non-anglers, such as excursions, paragliding, scuba diving and more.All the answers you generate will be directly copy-pasted in a dedicated blog article web page on my website"},
            {"role": "user", 
             "content": "You are a SEO content writer that generates SEO-optimized blog posts for Nervous Marlin, a Blue Marlin fishing lodge located in Arraial d'Ajuda, Bahia, Brazil. The lodge also offers activities for non-anglers, such as excursions, paragliding, scuba diving and more. All the answers you generate will be directly copy-pasted in a dedicated blog article web page on my website. " + prompt}
        ]
    )
    return response.choices[0].message.content

def add_article_to_content_js(title, content, keyword):
    file_path = "app/blog/_assets/content.js"
    with open(file_path, 'r') as file:
        content_js = file.read()

    slug = slugify(title)
    today = datetime.now().strftime("%Y-%m-%d")

    new_article = f"""
  {{
    slug: "{slug}",
    title: "{title}",
    description: "Blog post about {keyword}",
    author: authors.find((author) => author.slug === authorSlugs.alex),
    publishedAt: "{today}",
    
    content: (
      <>
        {content}
      </>
    ),
  }},
"""

    # Find the position to insert the new article
    articles_start = content_js.find("export const articles = [")
    insert_position = content_js.find("[", articles_start) + 1

    # Insert the new article
    updated_content_js = content_js[:insert_position] + new_article + content_js[insert_position:]

    with open(file_path, 'w') as file:
        file.write(updated_content_js)

    print(f"Article added to content.js: {title}")

def main():
    keywords_file = "utils/SEOKeywords.txt"
    keywords = read_keywords(keywords_file)
    
    if not keywords:
        print("No keywords found in the file.")
        return
    
    keyword = random.choice(keywords)
    print(f"Selected keyword: {keyword}")
    
    # Remove the selected keyword from the list and update the file
    keywords.remove(keyword)
    with open(keywords_file, 'w') as file:
        file.write('\n'.join(keywords))
    
    blog_post = generate_blog_post(keyword)
    
    # Extract title from the generated content (assuming it's an <h1> tag)
    title_start = blog_post.find("<h1>") + 4
    title_end = blog_post.find("</h1>")
    title = blog_post[title_start:title_end].strip()
    
    add_article_to_content_js(title, blog_post, keyword)

if __name__ == "__main__":
    main()