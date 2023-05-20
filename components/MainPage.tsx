import Logo from "@/public/favicon.svg";
import Moon from "@/public/moon-outline.svg";
import Sun from "@/public/sunny-outline.svg";
import style from "@/styles/MainPage.module.css";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import Title from "./Title";
const MainPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`py-fl-md`}>
      <div
        className={`
      flex
      max-h-fl-2xl-3xl
      items-center 
      justify-between
      px-fl-lg
      md:justify-around
      xl:justify-evenly
      `}
      >
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src={Logo} alt="Logo" className={`w-fl-xl-3xl`} />
        }
        <Title text="Crackq.Me" />
        <div className={style["theme"]}>
          {theme === "dark" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={Sun}
              alt={"light-theme"}
              className={`h-fl-lg w-fl-lg `}
              onClick={() => setTheme("light")}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={Moon}
              alt={"dark-theme"}
              className={`m-fl-3xs h-fl-xs w-fl-xs`}
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default MainPage;
