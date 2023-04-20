import { useAppDispatch } from "@/hooks/useApp";
import type {
  TurnstileInstance,
  TurnstileProps,
} from "@marsidev/react-turnstile";
import { Turnstile } from "@marsidev/react-turnstile";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Detector, Offline } from "react-detect-offline";
import { useSelector } from "react-redux";
import {
  captchaFailed,
  selectCaptchaErrors,
  selectCaptchaValidated,
  tokenValidated,
  useValidateTokenMutation,
} from "./captchaSlice";
import { Lang, Theme, WidgetSize, WidgetStatus } from "./types";

interface Props extends Omit<TurnstileProps, "siteKey"> {
  initialTheme?: Theme;
  initialSize?: WidgetSize;
  initialLang?: Lang;
}

export default function Captcha({
  initialTheme,
  initialSize,
  initialLang,
  ...props
}: Props) {
  const siteTheme = useTheme().resolvedTheme as Theme | undefined;
  const [theme, setTheme] = useState<Theme | undefined>(
    initialTheme ?? siteTheme
  );
  const [size, setSize] = useState<WidgetSize>(initialSize ?? "normal");
  const [lang, setLang] = useState<Lang>(initialLang ?? "auto");
  const [status, setStatus] = useState<WidgetStatus>(null);
  const [token, setToken] = useState<string>();

  useEffect(() => {
    if (siteTheme && !theme) {
      setTheme(siteTheme as Theme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteTheme]);
  const captchaErrors = useSelector(selectCaptchaErrors);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [validateToken, { isError, isSuccess, error, isLoading }] =
    useValidateTokenMutation();
  const captchaValidated = useSelector(selectCaptchaValidated);
  const dispatch = useAppDispatch();
  const siteKey =
    process.env.NODE_ENV === "development"
      ? // Always pass on dev
        "1x00000000000000000000AA"
      : process.env.NEXT_PUBLIC_CFSITE_KEY;
  const [cData, setCData] = useState(Date.now().toString());
  return (
    <>
      <Offline>You are Offline!</Offline>
      <Detector
        render={({ online }) => {
          // Captcha Invalid Token Provided
          if (captchaErrors?.includes("invalid-input-response")) {
            return <p>Invalid Captcha Provided!</p>;
          } else if (!online) return null;
          // We are online and captcha has not been validated!
          else if (!captchaValidated) return null;
          else {
            return <p>Captcha Validated!!!</p>;
          }
        }}
      />
      <Turnstile
        {...props}
        id="cf-challenge"
        options={{ cData }}
        ref={turnstileRef}
        siteKey={siteKey}
        onSuccess={async (token) => {
          try {
            const res = await validateToken(token).unwrap();
            if (res.success) dispatch(tokenValidated(token));
            // Error encountered validating Captcha
            if (res["error-codes"]) {
              dispatch(captchaFailed(res["error-codes"]));
            }
          } catch (error) {
            // TODO: Report Error for analytics
            console.log("error:", JSON.stringify(error));
          }
        }}
      />
    </>
  );
}
