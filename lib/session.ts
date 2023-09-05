// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { TurnstileServerValidationResponse } from '@marsidev/react-turnstile';
import { getIronSession, type IronSessionOptions } from 'iron-session';
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
export const cookieName = 'cloudflare_session';
export const sessionOptions: IronSessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName,
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
};

export function withSessionRoute(handler: NextApiHandler) {
    return withIronSessionApiRoute(handler, sessionOptions);
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSessionSsr<P extends { [key: string]: unknown } = { [key: string]: unknown }>(handler: (context: GetServerSidePropsContext) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>) {
    return withIronSessionSsr(handler, sessionOptions);
}

interface GeoIP {
    ip_address: string;
    city?: string;
    country?: string;
}
export interface SessionData {
    user_id: string;
    geo_ip: GeoIP;
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
    interface IronSessionData {
        validationResponse?: TurnstileServerValidationResponse;
        sessionData: SessionData;
    }
}

export const getSessionData = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getIronSession(req, res, { cookieName, password: process.env.SECRET_COOKIE_PASSWORD });
    return session.sessionData;
};

export const getValidationResponse = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getIronSession(req, res, { cookieName, password: process.env.SECRET_COOKIE_PASSWORD });
    return session.validationResponse;
};
