import getClientIp from "@/lib/getClientIp";
import runMiddleware from "@/lib/runMiddleware";
import { TurnstileServerValidationResponse } from "@marsidev/react-turnstile";
import { IsNotEmpty, Length } from "class-validator";
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
  @Length(1, 2048)
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

    // Verifying Client IP
    const clientIp = await getClientIp(req);
    if (clientIp === null)
      throw new UnprocessableEntityException("Could not determine ip address");
    // Verifying Client IP End

    // Validating Token
    const validationRes = await fetch(verifyEndpoint, {
      method: "POST",
      body: `secret=${encodeURIComponent(
        process.env.CFSECRET_KEY
      )}&response=${encodeURIComponent(token)}&remoteip=${encodeURIComponent(
        clientIp
      )}`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });
    const response = await validationRes.json() as TurnstileServerValidationResponse
    return response as TurnstileServerValidationResponse;
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
