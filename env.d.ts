namespace NodeJS {
  interface ProcessEnv {
    REDIS_URL?: string;
    dGEO_DB_URL: string;
    dCAPTCHA_DB_URL: string;
    GEO_DB_URL?: string;
    CAPTCHA_DB_URL?: string;
    CFSITE_KEY: string;
    CFSECRET_KEY: string;
  }
}
