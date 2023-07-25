import type { GlobalProvider } from '@ladle/react';
import 'inter-ui/inter.css';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { makeStore } from '../lib/redux/store';
import './globals.scss';

export const Provider: GlobalProvider = ({ children, globalState, storyMeta }) => (
    <ReduxProvider store={makeStore()}>
        <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
);
