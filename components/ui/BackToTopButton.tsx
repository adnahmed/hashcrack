import styles from '@/styles/BackToTopButton.module.css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
function BackToTopButton() {
    const [hideOnScroll, setHideOnScroll] = useState(true);
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > prevPos.y;
            if (isShow !== hideOnScroll && currPos.y > 0) setHideOnScroll(isShow);
        },
        [hideOnScroll]
    );
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    return (
        <button
            style={{
                position: 'fixed',
            }}
            onClick={scrollToTop}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className={`${hideOnScroll ? styles.fadeOut : styles.fadeIn} active:shadow-lg" id="btn-back-to-top bottom-5 right-5 inline-block rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800`}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="h-4 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
            </svg>
        </button>
    );
}

export default BackToTopButton;
