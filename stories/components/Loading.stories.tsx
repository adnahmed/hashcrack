import Loading from '@/components/ui/Loading';
import type { Story, StoryDefault } from '@ladle/react';

export const LoadingPage: Story = () => (
    <>
        <Loading />
    </>
);

LoadingPage.storyName = 'LoadingPage';

export default {
    title: 'UI/LoadingPage',
} satisfies StoryDefault;
