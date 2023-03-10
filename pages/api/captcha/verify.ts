import { captchaKv } from '@/lib/cache';
import getClientIp from '@/lib/getClientIp';
import runMiddleware from '@/lib/runMiddleware';
import { setCookie } from '@/utils/cookies';
import { IsNotEmpty, MinLength } from 'class-validator';
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import { Body, HttpCode, Post, Req, Res, UnauthorizedException, UnprocessableEntityException, ValidationPipe, createHandler } from 'next-api-decorators';

const cors = Cors({
    methods: ['POST']
})
class CaptchaVerifyInput {
    @IsNotEmpty()
    @MinLength(parseInt(process.env.CAPTCHA_LETTER_NUM || '4')) // 4 is the default length for captcha.create()
    answer!: string;
}

class CaptchaVerifyHandler {
    @Post()
    @HttpCode(403)
    async verify(@Req() req: NextApiRequest, @Res() res: NextApiResponse, @Body(ValidationPipe) body: CaptchaVerifyInput) {
        const captchaTimeout = parseInt(process.env.CAPTCHA_VERIFY_MAXAGE)
        await runMiddleware(req, res, cors)
        const { answer } = body;
        const clientIp = await getClientIp(req)
        if (clientIp === null) throw new UnprocessableEntityException('Could not determine ip address')
        const ground = await captchaKv.get(clientIp)
        if (answer == ground) {
            setCookie(res, 'CAPTCHA_VERIFY_TOKEN', 'token', { maxAge: captchaTimeout, sameSite: 'lax' })
            return res.status(200).json({ result: true, token: null }) // TODO: Return a JWT Token
        }
        throw new UnauthorizedException('Invalid Captcha Provided.')
    }
}

export const config: PageConfig = {
    api: {
        bodyParser: {
            sizeLimit: '500kb'
        }
    }
}


export default createHandler(CaptchaVerifyHandler)