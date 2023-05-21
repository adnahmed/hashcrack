import { Tabs, TabsRef } from "flowbite-react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import React from "react";


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
      className="justify-center flex-nowrap [& *]:text-fl-xs-2xl gap-fl-md [& *]:h-fl-2xs-2xl  [& *]:w-fl-2xl" aria-label="Full width tabs" style="default">
      {
        TabLabels.map((title, index) => (
          < Tabs.Item active={activeTab === index} key={title} title={title}>
          </Tabs.Item>))
      }
    </Tabs.Group >
  );
})

export default Navbar;
/*

      <Tabs.Item title="Add New Task">
        <NewTask />
      </Tabs.Item>
      <Tabs.Item title="Get Result">Get Result</Tabs.Item>
      <Tabs.Item title="Verify Service">Verify Service</Tabs.Item>
      <Tabs.Item title="Contact Us">
        <ContactUs />
      </Tabs.Item>
      */