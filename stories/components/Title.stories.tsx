import Title from '@/components/Title';
import type { Story, StoryDefault } from '@ladle/react';

export const TitlePage: Story = () => <Title text="Crackq.Me" />;

TitlePage.storyName = 'TitlePage';

export default {
    title: 'UI/TitlePage',
} satisfies StoryDefault;
