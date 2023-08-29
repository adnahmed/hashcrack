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

    /* Iron-Session (Secure) */
    SECRET_COOKIE_PASSWORD: string;

    /* Business Logic */
    NEXT_PUBLIC_Privacy_Mode_Price: string;
  }
}
