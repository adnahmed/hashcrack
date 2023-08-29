import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import styles from '@/styles/ConfigureTask.module.css';
import rippleStyle from '@/styles/RippleEffect.module.scss';
import { Accordion, AccordionContent, AccordionItem } from '@patternfly/react-core';
import React, { JSX, SVGProps, useEffect, useRef, useState } from 'react';
import { Configuration, selectSelectedConfig, selectedConfig } from '../NewTask/newTaskSlice';

function ConfigureTask() {
    const [expanded, setExpanded] = React.useState('');
    const onToggle = (id: string) => {
        if (id === expanded) {
            setExpanded('');
        } else {
            setExpanded(id);
        }
    };
    return (
        <Accordion className={styles.attackContainer}>
            <AccordionItem>
                <BasicHashAttack id={Configuration.BASIC.toString()} expanded={expanded} onToggle={onToggle} />
                <AccordionContent id={Configuration.BASIC.toString()} isHidden={expanded !== Configuration.BASIC.toString()}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </AccordionContent>
            </AccordionItem>
            <ComingSoonAttacks />
        </Accordion>
    );
}
interface AttackButtonProps {
    expanded: string;
    onToggle: (id: string) => void;
    id: string;
}
function ComingSoonAttacks() {
    const [x, y, buttonRef] = useMouseProgress();
    return (
        <button type="button" ref={buttonRef} style={{ '--x': x, '--y': y } as React.CSSProperties} className={`text-fl-xs ${rippleStyle.rippleButtonDisabled} ${styles.attackButton} ${rippleStyle.rippleButton} ${styles.attackButtonDisabled} `}>
            <PinIcon className={`${styles.icon} `} />
            More Coming Soon...
        </button>
    );
}

function useChangedConfig(buttonRef: React.MutableRefObject<HTMLButtonElement | null>, config: Configuration, expanded: boolean) {
    const currentConfig = useAppSelector(selectSelectedConfig);
    useEffect(() => {
        const button = buttonRef?.current;
        const updateTheme = () => {
            if (currentConfig === config && expanded) button?.classList.add(`${styles.attackButtonSelected}`);
            else button?.classList.remove(`${styles.attackButtonSelected}`);
        };
        button?.addEventListener('animationend', updateTheme);
        return () => button?.removeEventListener('animationend', updateTheme);
    }, [buttonRef, config, currentConfig, expanded]);
}
function BasicHashAttack(props: AttackButtonProps) {
    const dispatch = useAppDispatch();
    const [x, y, buttonRef] = useMouseProgress();
    useChangedConfig(buttonRef as React.MutableRefObject<HTMLButtonElement | null>, Configuration.BASIC, props.expanded === props.id);
    return (
        <button
            id="def-list-toggle1"
            onClick={() => {
                dispatch(selectedConfig(Configuration.BASIC));
                props.onToggle(props.id);
            }}
            type="button"
            ref={buttonRef}
            style={{ '--x': x, '--y': y } as React.CSSProperties}
            className={`text-fl-xs  ${styles.attackButton} ${rippleStyle.rippleButton} `}>
            <BasicIcon className={`${styles.icon} `} />
            Basic Hash Search
        </button>
    );
}

type TouchEventWithOffset = TouchEvent & { offsetX: number | undefined; offsetY: number | undefined };
function addTouchOffsets(event: TouchEvent | MouseEvent): TouchEventWithOffset | MouseEvent {
    if (event.type === 'mousedown') return event as MouseEvent;
    const e: TouchEventWithOffset = { ...(event as TouchEvent), offsetX: undefined, offsetY: undefined };
    const touch = e.touches[0] || e.changedTouches[0];
    const realTarget = document.elementFromPoint(touch.clientX, touch.clientY) || undefined;
    e.offsetX = touch.clientX - (realTarget?.getBoundingClientRect()?.x || 0);
    e.offsetY = touch.clientY - (realTarget?.getBoundingClientRect()?.y || 0);
    return e;
}

const useMouseProgress = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    //initialize the positions
    const [x, setX] = useState<string | null>(null);
    const [y, setY] = useState<string | null>(null);
    useEffect(() => {
        const button = buttonRef?.current;
        const updateXY = (e: MouseEvent | TouchEvent) => {
            const event = addTouchOffsets(e);
            setX(`${event.offsetX}px`);
            setY(`${event.offsetY}px`);
            button?.classList.add(`${rippleStyle.ripple}`);
            button?.addEventListener('animationend', () => {
                button?.classList.remove(`${rippleStyle.ripple}`);
            });
        };
        button?.addEventListener('mousedown', updateXY);
        button?.addEventListener('touchmove', updateXY);
        return () => {
            button?.removeEventListener('mousedown', updateXY);
            button?.removeEventListener('touchmove', updateXY);
        };
    }, [setX, setY, buttonRef]);
    return [x, y, buttonRef];
};

function PinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C" />
            <path d="M15.5918 9.90258L14.1094 8.41878C13.0961 7.40445 12.5894 6.89728 12.0452 7.01734C11.501 7.1374 11.2543 7.81078 10.7608 9.15753L10.4269 10.069C10.2953 10.4281 10.2295 10.6076 10.1112 10.7465C10.0581 10.8088 9.99768 10.8644 9.93125 10.9123C9.78322 11.0188 9.59906 11.0696 9.23072 11.1711C8.40055 11.4 7.98544 11.5145 7.82902 11.786C7.7614 11.9035 7.72621 12.0368 7.72707 12.1723C7.72905 12.4858 8.03349 12.7905 8.64238 13.4L9.08868 13.848L7.46924 15.4701C7.17658 15.7632 7.17697 16.2381 7.4701 16.5308C7.76323 16.8234 8.2381 16.823 8.53076 16.5299L10.1495 14.9086L10.6222 15.3818C11.235 15.9951 11.5413 16.3018 11.8567 16.3023C11.9896 16.3025 12.1202 16.2679 12.2357 16.202C12.5096 16.0457 12.6247 15.6276 12.8548 14.7913C12.9559 14.4236 13.0065 14.2397 13.1127 14.0918C13.1592 14.027 13.2131 13.9679 13.2734 13.9157C13.411 13.7965 13.5894 13.7295 13.9461 13.5955L14.8681 13.2491C16.2 12.7487 16.866 12.4985 16.9833 11.9557C17.1007 11.413 16.5977 10.9095 15.5918 9.90258Z" />
        </svg>
    );
}

function BasicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} x="0px" y="0px" fill="currentColor" viewBox="0 0 256 256">
            <g>
                <g>
                    <path d="M215.8,128c-16.7,0-30.3-13.6-30.3-30.3c0-16.7,13.6-30.3,30.3-30.3S246,81.1,246,97.8C246,114.5,232.4,128,215.8,128L215.8,128z M215.8,79.6c-10,0-18.2,8.1-18.2,18.2c0,10,8.2,18.1,18.2,18.1c10,0,18.2-8.1,18.2-18.1C233.9,87.7,225.7,79.6,215.8,79.6L215.8,79.6z M217.5,174.3c-13.7,29.1-39.3,50.6-70.3,58.9c-9.4,2.5-18.9,3.7-28.2,3.7c-48.1,0-92.2-32.2-105.3-80.8c-15.6-58,19-117.9,77-133.4c46.7-12.5,95.2,6.7,120.7,47.8c1.8,2.8,0.9,6.6-2,8.3c-2.8,1.8-6.6,0.9-8.3-2c-22.7-36.5-65.8-53.6-107.3-42.5c-51.6,13.8-82.3,67-68.5,118.6s67.1,82.3,118.6,68.5c27.6-7.4,50.3-26.5,62.5-52.4c1.4-3,5-4.3,8-2.9C217.6,167.7,218.9,171.3,217.5,174.3L217.5,174.3z" />
                </g>
            </g>
        </svg>
    );
}

export default ConfigureTask;
