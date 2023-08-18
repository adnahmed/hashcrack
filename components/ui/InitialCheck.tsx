import Captcha from '@/features/Captcha/Captcha';
import { selectCaptchaErrors } from '@/features/Captcha/captchaSlice';
import { useAppSelector } from '@/lib/redux/store';
import Logo from '@/public/favicon.svg';
import style from '@/styles/InitialCheck.module.css';
import Obfuscate from 'react-obfuscate';
import CustomToaster from '../Toaster';
import DotLoader from './DotLoader';

function IntialCheck() {
    const captchaErrors = useAppSelector(selectCaptchaErrors);
    return (
        <div className={style.main}>
            <img src={Logo} alt="Logo" className="h-fl-3xl w-fl-3xl" />
            <span className={`text-fl-md w-auto text-center`}>Please wait while we are checking your browser...</span>
            <div>
                {!captchaErrors?.includes('invalid-input-response') ? <DotLoader /> : undefined}
                <Captcha />
            </div>
            <div>
                <span className="break-before-all text-center text-fl-xs">Connection Problems? Let us Know</span>
                <div className="text-fl-2xs text-center underline">
                    <Obfuscate
                        email="aboody.hammad@gmail.com"
                        headers={{
                            subject: 'CrackQ.Me Support: *Your Issue* ',
                            body: '',
                        }}
                        obfuscateChildren={false}>
                        Contact Us
                    </Obfuscate>
                </div>
            </div>
            <CustomToaster />
        </div>
    );
}

export default IntialCheck;
