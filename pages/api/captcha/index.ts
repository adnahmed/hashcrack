import { captcha, geo } from "@/lib/cache";
import reader from "@/lib/geoip";
import getClientIp from "@/lib/getClientIp";
import runMiddleware from "@/lib/runMiddleware";
import { Resvg } from "@resvg/resvg-js";
import Cors from "cors";
import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import {
  Get,
  Req,
  Res,
  UnprocessableEntityException,
  createHandler,
} from "next-api-decorators";
import svgCaptcha from "svg-captcha";
const cors = Cors({
  methods: ["GET"],
});

type GetCaptchaResponse = {
  captcha?: string;
  error?: string;
};

class GetCaptchaHandler {
  @Get()
  public async getCaptcha(
    @Req() req: NextApiRequest,
    @Res() res: NextApiResponse<GetCaptchaResponse>
  ) {
    try {
      await runMiddleware(req, res, cors);
      // TODO: Improve Performance
      const captcha = svgCaptcha.create({
        size: parseInt(process.env.CAPTCHA_LETTER_NUM),
        // noise: 20
      });
      const clientIp = await getClientIp(req);
      if (clientIp === null)
        throw new UnprocessableEntityException(
          "Could not determine ip address"
        );
      const geo = await reader.country(clientIp).country?.names.en;
      if (!geo)
        throw new UnprocessableEntityException(
          "Could not determine geolocation"
        );
      captcha.set(clientIp, captcha.text);
      geo.set(clientIp, geo);
      const svg = captcha.data;
      const opts = {
        background: "rgba(238, 235, 230, .9)",
        // fitTo: {
        //     mode: "width",
        //     value: 200,
        // },
        font: {
          //   fontFiles: ['./example/SourceHanSerifCN-Light-subset.ttf'], // Load custom fonts.
          //   loadSystemFonts: false, // It will be faster to disable loading system fonts.
          defaultFontFamily: "Source Han Serif CN Light",
        },
      };
      const resvg = new Resvg(svg, opts);
      const pngBuffer = Buffer.from(resvg.render().asPng()).toString("base64");
      return res.status(200).json({ captcha: pngBuffer });
    } catch (err) {
      console.warn(err);
    }
  }
}
export const config: PageConfig = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
};

export default createHandler(GetCaptchaHandler);
