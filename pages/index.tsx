import IntialCheck from '@/components/ui/InitialCheck';
import Loading from '@/components/ui/Loading';
import { selectCaptchaValidated } from '@/features/Captcha/captchaSlice';
import { selectActiveWizardTab } from '@/features/Navigation/navigationSlice';
import { useAppSelector } from '@/lib/redux/store';
import Head from 'next/head';
import { Suspense, lazy } from 'react';
import { NextPageWithLayout } from './_app';
const MainPage = lazy(() => import('@/components/MainPage'));
const Home: NextPageWithLayout = () => {
    const captchaValidated = useAppSelector(selectCaptchaValidated);
    const isWizardTab = useAppSelector(selectActiveWizardTab);
    return (
        <>
            <Head>
                <title>Crackq.Me</title>
                <meta name="description" content="crackq.me: Hashcat as a Service" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className={`${isWizardTab ? 'flex h-screen flex-col' : ''} `}>
                {!captchaValidated ? (
                    <IntialCheck />
                ) : (
                    <Suspense fallback={
                        <div className=''>
                            <Loading />
                        </div>
                    }>
                        <MainPage />
                    </Suspense>
                )}
            </div>
        </>
    );
};
export default Home;
