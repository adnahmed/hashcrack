import NavbarComponent from "@/components/Navbar";
import type { Story, StoryDefault } from "@ladle/react";

export const NavBarPage: Story = () => (
  <>
    <NavbarComponent />
  </>
);

NavBarPage.storyName = "Navbar";

export default {
  title: "UI/Navbar",
} satisfies StoryDefault;
