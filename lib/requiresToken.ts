import { CAPTCHA_HEADER_TOKEN } from "@/assets/constants";
import { NextApiRequest, NextApiResponse } from "next";
import { NextFunction, UnauthorizedException, createMiddlewareDecorator } from "next-api-decorators";

const requiresToken = createMiddlewareDecorator(
    async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
        const headers = req.headers;
        const token = headers[CAPTCHA_HEADER_TOKEN]
        // TODO: verify signature of token;
        if (!token && process.env.NODE_ENV !== 'development') { throw new UnauthorizedException(); }
        next();
    }
)

export default requiresToken;
