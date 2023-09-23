import { WPACaptureFileType } from '@/assets/constants';
import { QuestionMark, Tick } from '@/components/Icons';
import Loading from '@/components/ui/Loading';
import { useAppSelector } from '@/lib/redux/store';
import styles from '@/styles/VerifyHashlist.module.css';
import { getWpaGroup } from '@/utils/wpa';
import { Accordion } from 'flowbite-react';
import NanoClamp from 'nanoclamp';
import { useMemo } from 'react';
import { ValuesType } from 'utility-types';
import { selectHashlistFileType, selectParsedHashlist, selectRejectedHashlist, selectSelectedHashType, selectVerifyingHashlist, selectWPAInfo } from '../NewTask/newTaskSlice';

function VerifyHashlist() {
    const verifyingHashlist = useAppSelector(selectVerifyingHashlist);
    const parsedHashes = useAppSelector(selectParsedHashlist);
    const rejectedHashes = useAppSelector(selectRejectedHashlist);
    const collapseAll = parsedHashes.length > 0 && rejectedHashes.length > 0;
    const showRejectedHashes = (parsedHashes.length === 0 && rejectedHashes.length > 0) || collapseAll;
    const hashtype = useAppSelector(selectSelectedHashType);
    const wpaGroup = useMemo(() => getWpaGroup(hashtype), [hashtype]);
    const wpaInfo = useAppSelector(selectWPAInfo);
    const hashlistFileType = useAppSelector(selectHashlistFileType);
    const showParsedHashes = (parsedHashes.length > 0 && rejectedHashes.length === 0) || collapseAll;
    if (verifyingHashlist)
        return (
            <>
                <Loading />
                <p className={'mt-fl-md-lg text-fl-sm'}>Verifying Hashes...</p>
            </>
        );
    if (wpaGroup) {
        switch (hashlistFileType as ValuesType<WPACaptureFileType>) {
            case 'hccapx':
                return (
                    <div className="max-w-2xl">
                        <p className="flex min-w-full justify-between p-4 text-fl-sm font-medium ">
                            <span>Total Handshakes</span>
                            <span className="font-bold">{wpaInfo?.length}</span>
                        </p>
                        <div>{JSON.stringify(wpaInfo)}</div>
                    </div>
                );
        }
    }
    return (
        <div className="max-w-2xl">
            <p className="flex min-w-full justify-between p-4 text-fl-sm font-medium ">
                <span>Total Hashes</span>
                <span className="font-bold">{parsedHashes.length + rejectedHashes.length}</span>
            </p>
            <Accordion className={`flex flex-col ${styles.accord} border-0`} collapseAll={collapseAll}>
                {showParsedHashes ? (
                    <Accordion.Panel isOpen={showParsedHashes}>
                        <Accordion.Title as="h4" className={`flex ${styles.good} ${styles.title}`}>
                            <span>
                                <Tick
                                    style={{
                                        display: 'inline',
                                    }}
                                />
                                Recognized Hashes
                            </span>
                            <span className={`font-bold`}>{parsedHashes.length}</span>
                        </Accordion.Title>
                        <Accordion.Content className={styles.acontent}>
                            {parsedHashes.map((h) => (
                                <li key={h} className={`mb-2 flex`}>
                                    <span className={`${styles.good}`}>
                                        <Tick />
                                    </span>
                                    <NanoClamp is="span" lines={1} text={h} />
                                </li>
                            ))}
                        </Accordion.Content>
                    </Accordion.Panel>
                ) : (
                    <></>
                )}
                {showRejectedHashes ? (
                    <Accordion.Panel isOpen={showRejectedHashes}>
                        <Accordion.Title as="h4" className={`flex ${rejectedHashes.length > 0 ? styles.bad : ''} ${styles.title}`}>
                            <span>
                                <QuestionMark
                                    style={{
                                        display: 'inline',
                                    }}
                                />
                                Unrecognized Hashes
                            </span>
                            <span className={`font-bold`}>{rejectedHashes.length}</span>
                        </Accordion.Title>
                        <Accordion.Content className={styles.acontent}>
                            {rejectedHashes.map((h) => (
                                <li key={h} className={`mb-2 flex`}>
                                    <span className={styles.bad}>
                                        <QuestionMark />
                                    </span>
                                    <NanoClamp is="span" lines={1} text={h} />
                                </li>
                            ))}
                        </Accordion.Content>
                    </Accordion.Panel>
                ) : (
                    <></>
                )}
            </Accordion>
        </div>
    );
}

export default VerifyHashlist;
