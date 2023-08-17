import requiresToken from '@/lib/requiresToken';
import runMiddleware from "@/lib/runMiddleware";
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import {
  Get,
  HttpCode,
  Req,
  Res,
  createHandler,
} from "next-api-decorators";
const API = process.env.CRACKQ_API;

const cors = Cors({
  origin: "crackq.me",
  methods: ["GET"],
});

class StatusHandler {
  @Get()
  @requiresToken()
  @HttpCode(200)
  async hosts(
    @Req() req: NextApiRequest,
    @Res() res: NextApiResponse) {
    await runMiddleware(req, res, cors);
  }
}


export const config: PageConfig = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
};

export default createHandler(StatusHandler);
