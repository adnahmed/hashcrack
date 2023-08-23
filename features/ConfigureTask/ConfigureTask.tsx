import styles from '@/styles/ConfigureTask.module.css';
import rippleStyle from '@/styles/RippleEffect.module.scss';
import { JSX, SVGProps, useEffect, useRef, useState } from 'react';

function ConfigureTask() {
    return (
        <>
            <AttackButton />
        </>
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
        const updateXY = (e: MouseEvent | TouchEvent) => {
            const event = addTouchOffsets(e);
            setX(`${event.offsetX}px`);
            setY(`${event.offsetY}px`);
            buttonRef?.current?.classList.add(`${rippleStyle.ripple}`);
            buttonRef?.current?.addEventListener('animationend', (e) => {
                buttonRef?.current?.classList.remove(`${rippleStyle.ripple}`);
            });
        };
        buttonRef?.current?.addEventListener('mousedown', updateXY);
        buttonRef?.current?.addEventListener('touchmove', updateXY);
        return () => {
            buttonRef?.current?.removeEventListener('mousedown', updateXY);
            buttonRef?.current?.removeEventListener('touchmove', updateXY);
        };
    }, [setX, setY, buttonRef]);
    return [x, y, buttonRef];
};

function AttackButton() {
    const [x, y, buttonRef] = useMouseProgress();
    return (
        <button type="button" ref={buttonRef} style={{ '--x': x, '--y': y }} className={`${styles.attackButton} ${rippleStyle.rippleButton} border py-3`}>
            <BasicIcon className={`${styles.icon} `} />
            Basic Hash Search
        </button>
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
