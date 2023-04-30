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
    <div className={style.main}>
      <div className={style.heading}>
        <img src={Logo} alt="Logo" className={style.logo} />
        <Title text="Crackq.Me" />
        <div className={style["theme"]}>
          {theme === "dark" ? (
            <img
              src={Sun}
              alt={"light-theme"}
              className={style["theme-icon"]}
              onClick={() => setTheme("light")}
            />
          ) : (
            <img
              src={Moon}
              alt={"dark-theme"}
              className={style["theme-icon"]}
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
