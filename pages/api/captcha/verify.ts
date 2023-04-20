import getClientIp from "@/lib/getClientIp";
import runMiddleware from "@/lib/runMiddleware";
import { TurnstileServerValidationResponse } from "@marsidev/react-turnstile";
import { IsNotEmpty } from "class-validator";
import Cors from "cors";
import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import {
  Body,
  HttpCode,
  Post,
  Req,
  Res,
  UnprocessableEntityException,
  ValidationPipe,
  createHandler,
} from "next-api-decorators";
import os from "os";

const verifyEndpoint =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const cors = Cors({
  origin: "crackq.me",
  methods: ["POST"],
});
class TokenValidateInput {
  @IsNotEmpty()
  token!: string;
}

class TokenValidateHandler {
  @Post()
  @HttpCode(200)
  async verify(
    @Req() req: NextApiRequest,
    @Res() res: NextApiResponse,
    @Body(ValidationPipe) body: TokenValidateInput
  ) {
    await runMiddleware(req, res, cors);
    const { token } = body;
    if (process.env.NODE_ENV === "development") {
      if (token === "XXXX.DUMMY.TOKEN.XXXX") {
        // Allow DUMMY TOKEN IN DEVELOPMENT
        const res: TurnstileServerValidationResponse = {
          success: true,
          hostname: os.hostname(),
        };
        return res;
      }
      // TODO: REPORT DUMMY TOKEN IN PRODUCTION
    }
    const clientIp = await getClientIp(req);
    // TODO: replace with captcha token approach.
    // if (clientIp === null)
    //   throw new UnprocessableEntityException("Could not determine ip address");
    // const ground = await captcha.get(clientIp);
    // if (answer == ground) {
    //   setCookie(res, "CAPTCHA_VERIFY_TOKEN", "token", {
    //     maxAge: captchaTimeout,
    //     sameSite: "lax",
    //   });
    //   return res
    //     .status(200)
    //     .json({ verified: true, token: null } as CaptchaState); // TODO: Return a JWT Token
    // }
    // throw new UnauthorizedException("Invalid Captcha Provided.");
  }
}

export const config: PageConfig = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
};

export default createHandler(TokenValidateHandler);
