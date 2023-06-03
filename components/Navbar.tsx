import { Tabs, TabsRef } from "flowbite-react";
import React, { Dispatch, SetStateAction } from "react";


interface NavbarProps {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  TabLabels: string[];
}

const Navbar = React.forwardRef<TabsRef, NavbarProps>((props, tabsRef) => {
  const { setActiveTab, activeTab, TabLabels } = props;
  return (
    <Tabs.Group
      ref={tabsRef}
      onActiveTabChange={(tab) => { setActiveTab(tab) }}
      className="[& *]:text-fl-xs-2xl [& *]:h-fl-2xs-2xl [& *]:w-fl-2xl  flex-nowrap justify-center " aria-label="Full width tabs" style="default">
      {
        TabLabels.map((title, index) => (
          <Tabs.Item active={activeTab === index} key={title} title={title}>
          </Tabs.Item>))
      }
    </Tabs.Group >
  );
})

Navbar.displayName = 'Navbar';

export default Navbar;