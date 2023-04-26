/** @type {import('next').NextConfig} */
const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: [process.env.ANALYZE === "true"],
});
const nextConfig = {
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const wdrPath = path.resolve(__dirname, "./scripts/wdyr.ts");
        const entries = await originalEntry();

        if (entries["main.js"] && !entries["main.js"].includes(wdrPath)) {
          entries["main.js"].push(wdrPath);
        }
        return entries;
      };
      config.plugins.push(new StylelintPlugin());
    }
    return config;
  },
  reactStrictMode: true,
  env: {},
};

module.exports =
  process.env.ANALYZE === "true" ? withBundleAnalyzer(nextConfig) : nextConfig;
