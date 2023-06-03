import { create } from "@kodingdotninja/use-tailwind-breakpoint";
import { useEffect } from "react";
type BreakpointKey = "sm" | "md" | "lg" | "lg2" | "xl" | "xl2" | "lg2";

const hooks = create({
  // Smartphone
  sm: "320px",
  md: "640px",
  // Tablet
  lg: "768px",
  // Notebook
  lg2: "940px",
  // Laptop
  xl: "1024px",
  // Desktop
  xl2: "1600px",
});

export function useBreakpoint(breakpoint: BreakpointKey) {
  const result = hooks.useBreakpoint(breakpoint);
  // Workaround for a bug with the use-tailwind-breakpoint library. See:
  // https://github.com/kodingdotninja/use-tailwind-breakpoint/issues/2#issuecomment-1030703188
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return result;
}
