import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import { Turnstile, TurnstileInstance, TurnstileProps } from '@marsidev/react-turnstile';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { captchaFailed, selectCanRetryCaptcha, selectCaptchaErrors, tokenValidated, useValidateTokenMutation } from './captchaSlice';
import { Lang, Theme, WidgetSize } from './types';

interface Props extends Omit<TurnstileProps, 'siteKey'> {
    initialTheme?: Theme;
    initialSize?: WidgetSize;
    initialLang?: Lang;
}

export default function Captcha({ initialTheme, initialSize, initialLang, ...props }: Props) {
    const siteTheme = useTheme().resolvedTheme as Theme | undefined;
    const [theme, setTheme] = useState<Theme | undefined>(initialTheme ?? siteTheme);

    useEffect(() => {
        if (siteTheme && !theme) {
            setTheme(siteTheme as Theme);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [siteTheme]);

    const captchaErrors = useAppSelector(selectCaptchaErrors);
    const canRetry = useAppSelector(selectCanRetryCaptcha);
    const turnstileRef = useRef<TurnstileInstance>(null);
    const [validateToken, { isError, isSuccess, error, isLoading }] = useValidateTokenMutation();
    const dispatch = useAppDispatch();
    const siteKey =
        process.env.NODE_ENV === 'development'
            ? // Always pass on dev
              '1x00000000000000000000AA'
            : process.env.NEXT_PUBLIC_CFSITE_KEY;
    // Useful for analytics
    const [cData, setCData] = useState(Date.now().toString());
    useEffect(() => {
        if (captchaErrors && captchaErrors.length > 0 && canRetry) {
            const turnstile = turnstileRef.current;
            turnstile?.reset();
        }
    }, [canRetry, captchaErrors]);
    const onSuccess: TurnstileProps['onSuccess'] = async (token) => {
        try {
            const res = await validateToken(token).unwrap();
            if (res.success) dispatch(tokenValidated(token));
            // Error encountered validating Captcha
            if (res['error-codes'] && res['error-codes'].length > 0) {
                dispatch(captchaFailed(res['error-codes']));
            }
        } catch (error) {
            // TODO: Report Error for analytics
            console.log('error:', JSON.stringify(error));
        }
    };

    const onError: TurnstileProps['onError'] = () => {
        toast.error("Captcha didn't launch due to an error, Please refresh the page.");
    };
    // TODO: Add Retry Button
    if (captchaErrors?.includes('invalid-input-response')) return <p className="color:[var(--theme)]">Invalid Captcha Provided!</p>;
    return (
        <div {...props}>
            <Turnstile id="cf-challenge" options={{ cData }} ref={turnstileRef} siteKey={siteKey} onSuccess={onSuccess} onError={onError} />
        </div>
    );
}
