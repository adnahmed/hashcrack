/// <reference types="next-images" />
namespace NodeJS {
  interface ProcessEnv {
    /* Cloudflared TURNSTILE envars */
    NEXT_PUBLIC_CFSITE_KEY: string;
    CFSECRET_KEY: string;

    /* CrackQ Backend API URL  */
    CRACKQ_API: string;

    /* Database URL */
    DB_URL: string;
  }
}
