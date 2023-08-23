import ConfigureTask from '@/features/ConfigureTask/ConfigureTask';
import type { Story, StoryDefault } from '@ladle/react';

export const ConfigureTaskStory: Story = () => (
    <div>
        <ConfigureTask />
    </div>
);

ConfigureTaskStory.storyName = 'ConfigureTask';

export default {
    title: 'Pages/ConfigureTask',
} satisfies StoryDefault;
