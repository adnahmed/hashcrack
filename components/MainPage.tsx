import Logo from "@/public/favicon.svg";
import Moon from "@/public/moon-outline.svg";
import Sun from "@/public/sunny-outline.svg";
import style from "@/styles/MainPage.module.css";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import Title from "./Title";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { ReactNode, useEffect, useRef, useState } from "react";
import { TabsRef } from "flowbite-react";
import NewTask from "@/features/NewTask/NewTask";
import ContactUs from "./ContactUs";
import TaskQueue from "./TaskQueue";
interface Tabs {
  [key: string]: ReactNode
}
const MainPage = () => {
  const TabsEnum: Tabs = {
    "Tasks Queue": <TaskQueue />,
    "Add New Tasks": <NewTask />,
    "Get Result": <div></div>,
    "Verify Service": <div></div>,
    "Contact Us": <ContactUs />
  }
  const TabLabels = Object.keys(TabsEnum)
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
      flex
      max-h-fl-2xl-3xl
      items-center 
      justify-between
      md:px-0
      sm:justify-around
      xl:justify-center
      xl:gap-fl-xl
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
