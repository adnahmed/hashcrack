import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

interface ThemedImageProps {
  light: string;
  dark: string;
  default: string;
}
const ThemedImage: FC<ThemedImageProps & Omit<ImageProps, "src">> = (props) => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = props.light;
      break;
    case "dark":
      src = props.dark;
      break;
    default:
      src = props.default;
      break;
  }

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image src={src} {...props} />;
};

export default ThemedImage;
