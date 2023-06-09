import { create } from "@kodingdotninja/use-tailwind-breakpoint";
import { useEffect } from "react";
type BreakpointKey = "sm" | "md" | "mdx" | "lg" | "xl" | "xl2";

const hooks = create({
  // Smartphone
  sm: "321px",
  md: "641px",
  // Notebook
  mdx: "939px",
  // Tablet
  lg: "769px",
  // Laptop
  xl: "1025px",
  // Desktop
  xl2: "1601px",
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
