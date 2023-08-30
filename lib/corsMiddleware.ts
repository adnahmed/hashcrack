import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from "next";
import { NextFunction, createMiddlewareDecorator } from "next-api-decorators";
import runMiddleware from "./runMiddleware";

const applyCors = (cors: ReturnType<typeof Cors>) => createMiddlewareDecorator(
    async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
        await runMiddleware(req, res, cors);
        next();
    }
)

export default applyCors;