import { TabLabels } from "@/components/ui/Tabs";
import NavbarComponent from "@/features/Navigation/Navbar";
import type { Story, StoryDefault } from "@ladle/react";
import { useState } from "react";

export const NavBarPage: Story = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (<>
    <NavbarComponent TabLabels={TabLabels} activeTab={activeTab} />
  </>
  );
}

NavBarPage.storyName = "Navbar";

export default {
  title: "UI/Navbar",
} satisfies StoryDefault;
