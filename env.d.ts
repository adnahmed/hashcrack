namespace NodeJS {
    interface ProcessEnv {
        dGEO_DB_URL: string
        dCAPTCHA_DB_URL: string
        GEO_DB_URL?: string
        CAPTCHA_DB_URL?: string
        CAPTCHA_LETTER_NUM: string
        CAPTCHA_VERIFY_MAXAGE: string
    }
}