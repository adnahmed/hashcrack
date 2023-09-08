import applyCors from '@/lib/corsMiddleware';
import geoIp from '@/lib/geoip';
import getClientIp from '@/lib/getClientIp';
import type { TurnstileServerValidationResponse } from '@marsidev/react-turnstile';
import { IsNotEmpty, Length } from 'class-validator';
import Cors from 'cors';
import type { NextApiRequest, PageConfig } from 'next';
import { Body, HttpCode, Post, Req, UnprocessableEntityException, ValidationPipe, createHandler } from 'next-api-decorators';
import os from 'os';
import { ulid } from 'ulidx';
import { SessionData, withSessionRoute } from '../../../lib/session';
const DUMMY_TOKEN = 'XXXX.DUMMY.TOKEN.XXXX';

const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const cors = Cors({
    origin: 'crackq.me',
    methods: ['POST'],
});

class TokenValidateInput {
    @IsNotEmpty()
    @Length(1, 2048)
    token!: string;
}

class TokenValidateHandler {
    @Post()
    @HttpCode(200)
    @applyCors(cors)()
    async verify(@Req() req: NextApiRequest, @Body(ValidationPipe) body: TokenValidateInput) {
        const { token } = body;
        if (process.env.NODE_ENV === 'development') {
            if (token === DUMMY_TOKEN) {
                // Allow DUMMY TOKEN IN DEVELOPMENT
                const validationResponse: TurnstileServerValidationResponse = {
                    success: true,
                    hostname: os.hostname(),
                };
                req.session = {
                    ...req.session,
                    validationResponse,
                };
                await req.session.save();
                return validationResponse;
            }
            // TODO: REPORT DUMMY TOKEN IN PRODUCTION
        }

        // Verifying Client IP
        const ip_address = await getClientIp(req);
        if (ip_address === null) throw new UnprocessableEntityException('Could not determine ip address');
        // Verifying Client IP End

        // Validating Token
        const response = await fetch(verifyEndpoint, {
            method: 'POST',
            body: `secret=${encodeURIComponent(process.env.CFSECRET_KEY)}&response=${encodeURIComponent(token)}&remoteip=${encodeURIComponent(ip_address)}`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        const validationResponse = (await response.json()) as TurnstileServerValidationResponse;
        const country = geoIp.country(ip_address).country?.names.en;
        const sessionData: SessionData = {
            user_id: ulid(),
            geo_ip: {
                ip_address,
                country,
            },
        };
        req.session = {
            ...req.session,
            validationResponse,
            sessionData,
        };
        await req.session.save();
        return validationResponse;
    }
}

export const config: PageConfig = {
    api: {
        bodyParser: {
            sizeLimit: '500kb',
        },
    },
};

export default withSessionRoute(createHandler(TokenValidateHandler));
