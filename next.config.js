/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    dCAPTCHA_DB_URL: "postgresql://postgres:@localhost:5432/hashcrack_captcha",
    dGEO_DB_URL: "postgresql://postgres:@localhost:5432/hashcrack_geo",
    CAPTCHA_LETTER_NUM: 4,
    CAPTCHA_VERIFY_MAXAGE: 60 * 6 * 24,
  },
};

module.exports = nextConfig;
