import themes from "daisyui/src/theming/themes.js";

const config = {
  // REQUIRED
  appName: "Nervous Marlin Fishing Lodge",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription: "Experience world-class Blue Marlin fishing in Bahia, Brazil",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "nervousmarlin.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  
  
  
};

export default config;
