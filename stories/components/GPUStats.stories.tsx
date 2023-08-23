import Stats from '@/features/Stats/Stats';
import type { Story, StoryDefault } from '@ladle/react';

export const StatsStory: Story = () => (
    <>
        <Stats />
    </>
);

StatsStory.storyName = 'Stats';

export default {
    title: 'Components',
} satisfies StoryDefault;
