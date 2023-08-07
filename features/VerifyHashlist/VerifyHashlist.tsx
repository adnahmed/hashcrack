import Loading from '@/components/ui/Loading';
import { useAppSelector } from '@/lib/redux/store';
import styles from '@/styles/VerifyHashlist.module.css';
import { Accordion } from 'flowbite-react';
import NanoClamp from 'nanoclamp';
import { FC, SVGProps } from 'react';
import { selectHashlistVerified, selectParsedHashlist, selectRejectedHashlist, selectVerifyingHashlist } from '../NewTask/newTaskSlice';
const QuestionMark: FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 inline h-6 w-6">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
        </svg>
    );
};

const Tick: FC<SVGProps<SVGSVGElement>> = (props) => {
    // eslint-disable-next-line prefer-const
    let { color, ...rest } = props;

    return (
        <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`mr-2 h-6 w-6 ${color}`}>
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
    );
};

function VerifyHashlist() {
    const verifyingHashlist = useAppSelector(selectVerifyingHashlist);
    const parsedHashes = useAppSelector(selectParsedHashlist);
    const rejectedHashes = useAppSelector(selectRejectedHashlist);
    const hashlistVerified = useAppSelector(selectHashlistVerified);
    const showRejectedHashes = parsedHashes.length === 0 && rejectedHashes.length > 0;
    const showParsedHashes = parsedHashes.length > 0 && rejectedHashes.length === 0;
    const collapseAll = parsedHashes.length > 0 && rejectedHashes.length > 0;
    if (verifyingHashlist)
        return (
            <>
                <Loading />
                <p className={'text-fl-lg'}>Verifying Hashes...</p>
            </>
        );
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
