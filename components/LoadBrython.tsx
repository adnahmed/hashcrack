import Script from 'next/script';
import { useState } from 'react';

function LoadBrython() {
    const [brythonLoaded, setBrythonLoaded] = useState(false);
    return (
        <>
            <Script src="/brython.js" onLoad={() => setBrythonLoaded(true)} />
            {brythonLoaded && <Script src="/brython_stdlib.js" />}
        </>
    );
}

export default LoadBrython;
