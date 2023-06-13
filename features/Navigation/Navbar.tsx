import { useAppDispatch } from '@/lib/redux/store';
import { Tabs, TabsRef } from 'flowbite-react';
import React from 'react';
import { activeTabChanged } from './navigationSlice';

interface NavbarProps {
    activeTab: number;
    TabLabels: string[];
}

const Navbar = React.forwardRef<TabsRef, NavbarProps>((props, tabsRef) => {
    const { activeTab, TabLabels } = props;
    const dispatch = useAppDispatch();
    return (
        <Tabs.Group
            ref={tabsRef}
            onActiveTabChange={(tab) => {
                dispatch(activeTabChanged(tab));
            }}
            className="flex-nowrap justify-center gap-0 rounded-md"
            aria-label="Full width tabs"
            style="default">
            {TabLabels.map((title, index) => (
                <Tabs.Item active={activeTab === index} key={title} title={title}></Tabs.Item>
            ))}
        </Tabs.Group>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
