/** @type {import('next').NextConfig} */
const path = require("path");
const withImages = require("next-images");
const withTM = require('next-transpile-modules')([
  '@patternfly/react-core',
  '@patternfly/react-styles',
  '@patternfly-labs/react-form-wizard'
])
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: [process.env.ANALYZE === "true"],
});
let nextConfig = {
  webpack(config, {
    dev,
    isServer
  }) {
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
    }

    return config;
  },
  reactStrictMode: true,
  env: {},
};
nextConfig = withImages(nextConfig);
nextConfig = withTM(nextConfig);
module.exports =
  process.env.ANALYZE === "true" ? withBundleAnalyzer(nextConfig) : nextConfig;