import { categories, articles } from "./_assets/content";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/utils/seo";
import Hero from "@/components/Hero";
import Outside4sun from "@/public/images/house/outside4sun.jpg";

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
      <Hero 
        title="The Nervous Marlin Blog"
        subtitle="Experience world-class Blue Marlin fishing in Bahia, Brazil"
        imageSrc={Outside4sun}
      />
      
      <div className="max-w-6xl mx-auto flex justify-center items-center py-12">
        <h1 className="text-3xl font-bold text-center">Blog Articles</h1>
      </div>

      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <section className="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8 max-w-6xl w-full">
          {articlesToDisplay.map((article, i) => (
            <CardArticle
              article={article}
              key={article.slug}
              isImagePriority={i <= 2}
            />
          ))}
        </section>
      </div>
      
    </>
  );
}
