import ContactUs from "@/components/ContactUs";
import type { Story, StoryDefault } from "@ladle/react";

export const ContactUsStory: Story = () => (
  <>
    <ContactUs />
  </>
);

ContactUsStory.storyName = "ContactUs";

export default {
  title: "Pages/ContactUs",
} satisfies StoryDefault;
