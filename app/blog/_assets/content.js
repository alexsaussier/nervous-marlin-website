import Image from "next/image";
import marcImg from "@/app/blog/_assets/images/authors/marc.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  feature: "feature",
  tutorial: "tutorial",
};



// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  antonio: "antonio",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.alex,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Antonio Figuieras",
    // The job to display in the author's bio. Up to 60 characters.
    job: "Web Developer",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "Antonio is a developer and fishing enthusiast.",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    // avatar: marcImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://x.com/AlexandreSauss1",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/alexandre-saussier-171b0b152/",
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/alexsaussier",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [

  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "maximize-your-investments-essential-stock-market-tools-for-investors",

    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Maximize Your Investments: Essential Stock Market Tools for Investors",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description: "Blog post about Stock market tools for investors",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.alex),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-09-04",
    // The image to display in <CardArticle /> components.
    /*image: {
      src: introducingSupabaseImg,
      urlRelative: "/blog/{slug}/header.jpg",
      alt: "{title}",
    },*/
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <h1>Maximize Your Investments: Essential Stock Market Tools for Investors</h1>
<p>
    Investing in the stock market can be a lucrative opportunity for growing your wealth over time. However, in order to make informed investment decisions and optimize your portfolio, it&apos;s essential to utilize the right tools and resources. Here are some essential stock market tools that every investor should consider incorporating into their investment strategy:
</p>

<h2>1. Stock Screener</h2>
<p>
    A stock screener is a powerful tool that allows investors to filter stocks based on specific criteria such as price, market capitalization, dividend yield, and more. By using a stock screener, investors can identify potential investment opportunities that meet their specific requirements and investment goals.
</p>

<h2>2. Investment Research Platforms</h2>
<p>
    Research platforms provide investors with access to in-depth analysis, financial data, and market research reports on individual stocks, sectors, and industries. These platforms can help investors make informed decisions by providing valuable insights and information to guide their investment strategies.
</p>

<h2>3. Portfolio Management Tools</h2>
<p>
    Portfolio management tools enable investors to track and manage their investments in a centralized platform. These tools allow investors to monitor the performance of their portfolio, analyze asset allocation, and identify areas for improvement or rebalancing to optimize returns and manage risk effectively.
</p>

<h2>4. Technical Analysis Tools</h2>
<p>
    Technical analysis tools help investors analyze historical price trends, patterns, and indicators to make informed investment decisions. These tools can provide valuable insights into market trends, price movements, and potential entry and exit points for trades.
</p>

<h2>5. Financial News and Market Data Platforms</h2>
<p>
    Staying informed about the latest financial news, market trends, and economic indicators is crucial for making informed investment decisions. Financial news and market data platforms provide investors with real-time updates, analysis, and commentary to help them stay ahead of market developments and understand the impact on their investments.
</p>

<p>
    By incorporating these essential stock market tools into your investment strategy, you can maximize your investments, make informed decisions, and navigate the complexities of the stock market with confidence.
</p>
      </>
    ),
  },
];
