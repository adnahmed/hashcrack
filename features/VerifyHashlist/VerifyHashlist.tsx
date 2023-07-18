import Loading from '@/components/ui/Loading';
import { useAppSelector } from '@/lib/redux/store';
import { selectHashlistVerified, selectParsedHashlist, selectRejectedHashlist, selectVerifyingHashlist } from '../NewTask/newTaskSlice';

function VerifyHashlist() {
    const verifyingHashlist = useAppSelector(selectVerifyingHashlist);
    const parsedHashes = useAppSelector(selectParsedHashlist);
    const rejectedHashes = useAppSelector(selectRejectedHashlist);
    const hashlistVerified = useAppSelector(selectHashlistVerified);
    if (verifyingHashlist)
        return <>
            <Loading />
            <p className={'text-fl-md'}>Verifying Hashes...</p>
        </>
    return (
        <div>
            Parsed: <br /> {parsedHashes}
            <br /> RejectedHashes: <br /> {rejectedHashes}
            <br /> hashlistVerified: {JSON.stringify(hashlistVerified)}
        </div>
    );
}

export default VerifyHashlist;
