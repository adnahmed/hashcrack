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
      <div className={`flex md:justify-around justify-evenly items-center`}>
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
              className={`w-fl-lg h-fl-lg `}
              onClick={() => setTheme("light")}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={Moon}
              alt={"dark-theme"}
              className={`w-fl-xs h-fl-xs m-fl-3xs`}
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
