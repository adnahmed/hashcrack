import HashlistContext from '@/Context/HashlistContext';
import NewTask from '@/features/NewTask/NewTask';
import { ReactNode, useState } from 'react';
import ContactUs from '../ContactUs';
import TaskQueue from '../TaskQueue';

export interface Tabs {
    [key: string]: ReactNode;
}

const NewTaskWrapper = (props: any) => {
    const [hashlist, setHashlist] = useState('');
    return (
        <HashlistContext.Provider value={{ hashlist, setHashlist }}>
            <NewTask />
        </HashlistContext.Provider>
    );
};
export const TabsEnum: Tabs = {
    'Tasks Queue': <TaskQueue />,
    'Add New Tasks': <NewTaskWrapper />,
    'Get Result': <div></div>,
    'Verify Service': <div></div>,
    'Contact Us': <ContactUs />,
};
export const TabLabels = Object.keys(TabsEnum);
