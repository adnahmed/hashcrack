import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useSSRTheme = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted]);
  const { theme, setTheme } = useTheme();
  if (!mounted) return { theme: null, setTheme: null };
  return { theme, setTheme };
};

export default useSSRTheme;
