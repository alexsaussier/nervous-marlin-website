import { categories, articles } from "./_assets/content";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/utils/seo";

export const metadata = getSEOTags({
  title: `${config.appName} Blog | `,
  description:
    "Experience world-class Blue Marlin fishing in Bahia, Brazil",
  canonicalUrlRelative: "/blog",
});

export default async function Blog() {
  const articlesToDisplay = articles
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 6);
  return (
    <>
      <div className="max-w-6xl mx-auto flex justify-center items-center py-12">
        <h1 className="text-3xl font-bold text-center">Blog Articles</h1>
      </div>

      <section className="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
        {articlesToDisplay.map((article, i) => (
          <CardArticle
            article={article}
            key={article.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>

      
    </>
  );
}
