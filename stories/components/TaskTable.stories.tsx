import TaskTable from "@/components/TaskTable";
import type { Story, StoryDefault } from "@ladle/react";

export const TaskTableStory: Story = () => (
  <>
    <TaskTable />
  </>
);

TaskTableStory.storyName = "TaskTable";

export default {
  title: "Pages/TaskTable",
} satisfies StoryDefault;
