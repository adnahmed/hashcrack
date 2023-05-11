// Type definitions for  react-obfuscate 1.0
// Project: react-obfuscate
// Definitions by: Adnan Ahmed Khan https://github.com/adnahmed/react-obfuscate

import { CSSProperties } from "@nextui-org/react/types/theme";
import { FunctionComponent } from "react";

interface ObfuscateProps {
  element?: string;
  children?: React.ReactNode;
  tel?: string;
  sms?: string;
  facetime?: string;
  email?: string;
  href?: string;
  headers?: { [key: string]: string };
  obfuscate?: boolean;
  obfuscateChildren?: boolean;
  linkText?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

declare const Obfuscate: FunctionComponent<ObfuscateProps>;
export default Obfuscate;
