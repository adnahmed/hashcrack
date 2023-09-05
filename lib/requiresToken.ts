import { NextApiRequest, NextApiResponse } from 'next';
import { NextFunction, UnauthorizedException, createMiddlewareDecorator } from 'next-api-decorators';
import { getValidationResponse } from './session';

const requiresToken = createMiddlewareDecorator(async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    const validationResponse = await getValidationResponse(req, res);
    if (!validationResponse) {
        throw new UnauthorizedException();
    }
    if (!validationResponse.success) {
        throw new UnauthorizedException(`Following Errors occurred:\n ${validationResponse['error-codes']?.join('\n')}`);
    }
    next();
});

export default requiresToken;
