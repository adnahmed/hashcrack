import { selectActiveTab, selectActiveWizardTab } from "@/features/Navigation/navigationSlice";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Logo from "@/public/favicon.svg";
import Moon from "@/public/moon-outline.svg";
import Sun from "@/public/sunny-outline.svg";
import style from "@/styles/MainPage.module.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import TetherComponent from 'react-tether';
import Navbar from "../features/Navigation/Navbar";
import Title from "./Title";
import { TabLabels, TabsEnum } from "./ui/Tabs";
const MainPage = () => {
  const { theme, setTheme } = useTheme();
  const [openNavbar, setOpenNavbar] = useState(false);
  const activeTab = useSelector(selectActiveTab);
  const isWizardTab = useSelector(selectActiveWizardTab);
  const isSmartPhone = useBreakpoint('sm');
  const isDesktop = useBreakpoint('mdx');
  useEffect(() => {
    if (isDesktop) setOpenNavbar(true)
    else setOpenNavbar(false)
  }, [isDesktop])

  return (
    <>
      <div
        className={`
      ${isWizardTab ? 'w-screen': ''}
      m-auto
      grid
      grid-flow-col
      items-center
      align-middle
      mdx:max-w-xl
      mdx:gap-fl-lg
    ${style.heading}
      `}
      >
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src={Logo} alt="Logo" className={`m-auto w-fl-xl-3xl`} />
        }
        <Title text="Crackq.Me" />
        <div className={style["theme"]}>
          {theme === "dark" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={Sun}
              alt={"light-theme"}
              className={`m-fl-3xs  w-fl-xs`}
              onClick={() => setTheme("light")}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={Moon}
              alt={"dark-theme"}
              className={`m-fl-3xs w-fl-xs`}
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
        {!isDesktop && <>
        <TetherComponent
				attachment="bottom left"
        targetAttachment="middle center"
        targetOffset={`50% ${ isSmartPhone ? '30%' :  '20%' } 0 0`}
				constraints={[
					{
						to: "scrollParent",
						attachment: "together",
					},
				]}
				/* renderTarget: This is what the item will be tethered to, make sure to attach the ref */
				renderTarget={(ref) => (
<button ref={ref} onClick={() => { setOpenNavbar(!openNavbar) }} className={`hamburger hamburger--collapse ${openNavbar && 'is-active'}`} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner">
            </span>
          </span>
        </button>
				)}
				/* renderElement: If present, this item will be tethered to the the component returned by renderTarget */
				renderElement={(ref) =>
					openNavbar &&
        <Navbar ref={ref} TabLabels={TabLabels} activeTab={activeTab} />
				}
			/>
        </>}
      </div>
        {isDesktop && 
        <Navbar TabLabels={TabLabels} activeTab={activeTab} />}
      <>
        {TabsEnum[TabLabels[activeTab]]}
        <Toaster />
      </>
    </>
  );
};

export default MainPage;
