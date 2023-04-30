import MainPage from "@/components/MainPage";
import type { Story, StoryDefault } from "@ladle/react";

export const MainPageStory: Story = () => (
  <>
    <MainPage />
  </>
);

MainPageStory.storyName = "MainPage";

export default {
  title: "Pages/MainPage",
} satisfies StoryDefault;
