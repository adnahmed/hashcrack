import getClientIp from "@/lib/getClientIp";
import runMiddleware from "@/lib/runMiddleware";
import type { TurnstileServerValidationResponse } from "@marsidev/react-turnstile";
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
  @HttpCode(403)
  async verify(
    @Req() req: NextApiRequest,
    @Res() res: NextApiResponse,
    @Body(ValidationPipe) body: TokenValidateInput
  ) {
    await runMiddleware(req, res, cors);
    const { token } = body;
    // Turnstile injects a token in "cf-turnstile-response".
    /*
    const token = body.get("cf-turnstile-response");
    const ip = request.headers.get("CF-Connecting-IP");

    // Validate the token by calling the
    // "/siteverify" API endpoint.
    const formData = new FormData();
    formData.append("secret", SECRET_KEY);
    formData.append("response", token);
    formData.append("remoteip", ip);
*/
    const verifyEndpoint =
      "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const clientIp = await getClientIp(req);
    if (clientIp === null)
      throw new UnprocessableEntityException("Could not determine ip address");
    const validationRes = await fetch(verifyEndpoint, {
      method: "POST",
      body: `secret=${encodeURIComponent(
        process.env.CFSECRET_KEY
      )}&response=${encodeURIComponent(token)}`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });

    const data =
      (await validationRes.json()) as TurnstileServerValidationResponse;
    return new Response(JSON.stringify(data), {
      status: data.success ? 200 : 400,
      headers: {
        "content-type": "application/json",
      },
    });
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
