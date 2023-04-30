import NewTask from "@/features/NewTask/NewTask";
import type { Story, StoryDefault } from "@ladle/react";

export const NewTaskStory: Story = () => (
  <>
    <NewTask />
  </>
);

NewTaskStory.storyName = "NewTask";

export default {
  title: "Pages/NewTask",
} satisfies StoryDefault;
