import { useAppDispatch } from "@/hooks/useApp";
import type {
  TurnstileInstance,
  TurnstileProps,
} from "@marsidev/react-turnstile";
import { Turnstile } from "@marsidev/react-turnstile";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import {
  captchaFailed,
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

  const turnstileRef = useRef<TurnstileInstance>(null);
  const [validateToken, { isError, isSuccess, error, isLoading }] =
    useValidateTokenMutation();
  const dispatch = useAppDispatch();
  return (
    <>
      <Turnstile
        {...props}
        ref={turnstileRef}
        siteKey={
          process.env.NODE_ENV === "development"
            ? // Always pass on dev
              "1x00000000000000000000AA"
            : process.env.CFSITE_KEY
        }
        onSuccess={async (token) => {
          const res = await validateToken(token).unwrap();
          if (res.success) dispatch(tokenValidated(token));
          // Error encountered validating Captcha
          if (res["error-codes"]) {
            dispatch(captchaFailed(res["error-codes"]));
          }
        }}
      />
    </>
  );
}
