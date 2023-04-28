import DotLoader from "@/components/ui/DotLoader";
import type { Story, StoryDefault } from "@ladle/react";

export const DotLoaderPage: Story = () => (
  <>
    <DotLoader />
  </>
);

DotLoaderPage.storyName = "DotLoader";

export default {
  title: "UI/DotLoader",
} satisfies StoryDefault;
