const path = require("path");
const withImages = require("next-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: [process.env.ANALYZE === "true"],
});
/** @type {import('next').NextConfig} */
let nextConfig = {
  webpack(config, {
    dev,
    isServer
  }) {
    if (dev && !isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        // Why did you render. 
        // const wdrPath = path.resolve(__dirname, "./scripts/wdyr.ts");
        // if (entries["main.js"] && !entries["main.js"].includes(wdrPath)) {
        //   entries["main.js"].push(wdrPath);
        // }
        return entries;
      };
    }

    return config;
  },
  reactStrictMode: true,
  env: {},
  transpilePackages: [
    '@patternfly/react-core',
    '@patternfly/react-styles',
    '@patternfly-labs/react-form-wizard',
    'redux-persist'
  ]
};
nextConfig = withImages(nextConfig);
module.exports =
  process.env.ANALYZE === "true" ? withBundleAnalyzer(nextConfig) : nextConfig;