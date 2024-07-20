// next-sitemap.js
module.exports = {
  siteUrl: "https://dafkur.com",
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/secret", "/admin"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/secret", "/admin"],
      },
    ],
  },
};
