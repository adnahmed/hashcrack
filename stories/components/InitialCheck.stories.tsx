import InitialCheck from "@/components/ui/InitialCheck";
import type { Story, StoryDefault } from "@ladle/react";

export const InitialCheckPage: Story = () => (
  <>
    <InitialCheck>
      <>Help</>
    </InitialCheck>
  </>
);

InitialCheckPage.storyName = "InitialCheck";

export default {
  title: "Pages/InitialCheck",
} satisfies StoryDefault;
