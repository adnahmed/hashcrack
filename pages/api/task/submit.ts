import { hashcat_modes } from '@/assets/constants';
import { Configuration } from '@/features/NewTask/newTaskSlice';
import applyCors from '@/lib/corsMiddleware';
import requiresToken from '@/lib/requiresToken';
import { getSessionData } from '@/lib/session';
import { ArrayMinSize, ArrayNotEmpty, ArrayUnique, Equals, IsBoolean, IsDefined, IsEmail, IsEnum, IsIn, IsString, ValidateIf } from 'class-validator';
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import { Body, HttpCode, Post, Req, Res, ValidationPipe, createHandler } from 'next-api-decorators';
import { TaskData } from '../../../features/NewTask/newTaskSlice';
const cors = Cors({
    origin: 'crackq.me',
    methods: ['POST'],
});

export interface SubmittedTask {
    id: string;
    created_at: Date;
    success: boolean;
}

class TaskValidateData implements TaskData {
    @IsBoolean()
    @Equals(true, {
        message: "You must accept terms and conditions before submitting task.",
    })
    acceptedTermsAndConditions!: boolean;

    @IsEnum(Configuration, {
        message: "Unknown attack configuration provided.",
    })
    selectedConfig!: Configuration;

    @ValidateIf(o => !o.privacyMode)
    @IsEmail({}, {
        message: `You must provide a valid email address if you've opted out of privacy mode.`
    })
    resultEmail!: string;

    @IsString()
    @IsIn(hashcat_modes, {
        message: "Unrecognized Hash Mode selected."
    })
    selectedHashType!: string;

    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ArrayUnique()
    hashlist!: string[];

    @ArrayUnique()
    @ArrayMinSize(0)
    rejectedHashlist!: string[];

    @IsBoolean()
    privacyMode!: boolean;

    @ValidateIf(o => o.selectedConfig !== Configuration.BASIC)
    @IsDefined()
    configData?: unknown;
}

class TaskSubmissionHandler {
    @Post()
    @requiresToken()
    @applyCors(cors)()
    @HttpCode(200)
    async submit(@Req() req: NextApiRequest, @Body(ValidationPipe) body: TaskValidateData, @Res() res: NextApiResponse<SubmittedTask>) {
        const sessionData = await getSessionData(req, res);
        console.log(hashcat_modes);
        // TODO: Create task in db.
        return res.status(200).send({
            ...sessionData,
            success: true,
            id: '1',
            created_at: new Date(Date.now())
        });
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
