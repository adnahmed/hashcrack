// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { TurnstileServerValidationResponse } from "@marsidev/react-turnstile";
import type { IronSessionOptions } from "iron-session";

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "cloudflare_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    validationResponse?: TurnstileServerValidationResponse;
  }
}
