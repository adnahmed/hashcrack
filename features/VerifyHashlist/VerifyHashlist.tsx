import { useAppSelector } from '@/lib/redux/store';
import { selectHashlistVerified, selectParsedHashlist, selectRejectedHashlist } from '../NewTask/newTaskSlice';

function VerifyHashlist() {
    const parsedHashes = useAppSelector(selectParsedHashlist);
    const rejectedHashes = useAppSelector(selectRejectedHashlist);
    const hashlistVerified = useAppSelector(selectHashlistVerified);
    return (
        <div>
            Parsed: <br /> {parsedHashes}
            <br /> RejectedHashes: <br /> {rejectedHashes}
            <br /> hashlistVerified: {JSON.stringify(hashlistVerified)}
        </div>
    );
}

export default VerifyHashlist;
