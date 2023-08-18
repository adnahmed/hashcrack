import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";
import { NextFunction, UnauthorizedException, createMiddlewareDecorator } from "next-api-decorators";
import { cookieName } from "./session";

const requiresToken = createMiddlewareDecorator(
    async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
        const session = await getIronSession(req, res, { cookieName, password: process.env.SECRET_COOKIE_PASSWORD });
        const validationResponse = session.validationResponse;
        if (!validationResponse) { throw new UnauthorizedException(); }
        if (!validationResponse.success) { throw new UnauthorizedException(`Following Errors occurred:\n ${validationResponse["error-codes"]?.join('\n')}`) }
        next();
    }
)

export default requiresToken;
