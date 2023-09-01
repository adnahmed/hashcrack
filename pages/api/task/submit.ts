import applyCors from "@/lib/corsMiddleware";
import requiresToken from "@/lib/requiresToken";
import Cors from 'cors';
import type { NextApiRequest, PageConfig } from "next";
import {
  HttpCode,
  Post,
  Req,
  createHandler
} from "next-api-decorators";
const cors = Cors({
  origin: "crackq.me",
  methods: ["GET", "POST"],
});

export interface SubmittedTaskResponse {
  task: {
    id: string
  }
}

class TaskSubmissionHandler {
  @Post()
  @requiresToken()
  @applyCors(cors)()
  @HttpCode(200)
  async submit(
    @Req() req: NextApiRequest) {
    return {
      task: {
        id: 1,
      }
    };
  }
}


export const config: PageConfig = {
  api: {
    bodyParser: {
      sizeLimit: "5000mb",
    },
  },
};

export default createHandler(TaskSubmissionHandler);
