/** @type {import('next').NextConfig} */
const fs = require("fs");
const version = JSON.parse(fs.readFileSync("./version.json", "utf-8")).version;

const nextConfig = {
  env: {
    NEXT_PUBLIC_VERSION: version,
  },
};

module.exports = nextConfig;
