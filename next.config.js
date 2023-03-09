/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DEFAULT_DB_URL: "postgresql://postgres:@localhost:5432/hashcrack",
    CAPTCHA_LETTER_NUM: 4,
    CAPTCHA_VERIFY_MAXAGE: 60 * 6 * 24,
  },
};

module.exports = nextConfig;
