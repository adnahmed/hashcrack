import applyCors from '@/lib/corsMiddleware';
import requiresToken from '@/lib/requiresToken';
import { getSessionData } from '@/lib/session';
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import { HttpCode, Post, Req, Res, createHandler } from 'next-api-decorators';
const cors = Cors({
    origin: 'crackq.me',
    methods: ['POST'],
});

export interface SubmittedTaskResponse {
    task: {
        id: string;
        created_by: string;
    };
    success: boolean;
}

class TaskSubmissionHandler {
    @Post()
    @requiresToken()
    @applyCors(cors)()
    @HttpCode(200)
    async submit(@Req() req: NextApiRequest, @Res() res: NextApiResponse) {
        const sessionData = await getSessionData(req, res);
        // TODO: Create task in db.
        return {
            ...sessionData,
            success: true,
            task: {
                id: 1,
            },
        };
    }
}

export const config: PageConfig = {
    api: {
        bodyParser: {
            sizeLimit: '500mb',
        },
    },
};

export default createHandler(TaskSubmissionHandler);
