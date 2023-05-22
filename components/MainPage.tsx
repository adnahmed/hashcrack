import Logo from "@/public/favicon.svg";
import Moon from "@/public/moon-outline.svg";
import Sun from "@/public/sunny-outline.svg";
import style from "@/styles/MainPage.module.css";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import Title from "./Title";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useEffect, useRef, useState } from "react";
import { TabsRef } from "flowbite-react";
import { TabLabels, TabsEnum } from "./ui/Tabs";
const MainPage = () => {
  const { theme, setTheme } = useTheme();
  const [openNavbar, setOpenNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);
  const isDesktop = useBreakpoint('lg2');
  useEffect(() => {
    if (isDesktop) setOpenNavbar(true)
    else setOpenNavbar(false)
  }, [isDesktop])

  return (
    <>
      <div
        className={`
      grid
      grid-flow-col
      items-center
    ${style.heading}
      `}
      >
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src={Logo} alt="Logo" className={`m-auto w-fl-xl-3xl`} />
        }
        <Title className="grid-" text="Crackq.Me" />
        <div className={style["theme"]}>
          {theme === "dark" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={Sun}
              alt={"light-theme"}
              className={`m-fl-3xs h-fl-xs w-fl-xs`}
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
        {!isDesktop && <button onClick={() => { setOpenNavbar(!openNavbar) }} className={`hamburger hamburger--collapse ${openNavbar && 'is-active'}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner">
            </span>
          </span>
        </button>}
      </div>
      {openNavbar &&
        <Navbar ref={tabsRef} TabLabels={TabLabels} activeTab={activeTab} setActiveTab={setActiveTab} />
      }
      {TabsEnum[TabLabels[activeTab]]}
    </>
  );
};

export default MainPage;
