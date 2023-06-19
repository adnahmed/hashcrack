import HashlistContext from '@/Context/HashlistContext';
import { selectVerifyingHashlist } from '@/features/NewTask/newTaskSlice';
import { useAppSelector } from '@/lib/redux/store';
import { useContext } from 'react';

interface HashlistTextProps {
    wireless?: boolean;
    isPMKID?: boolean;
}
function HashlistText({ wireless = false, isPMKID = false }: HashlistTextProps) {
    const hashlistConsumer = useContext(HashlistContext);
    const verifyingHashlist = useAppSelector(selectVerifyingHashlist);
    return hashlistConsumer !== null ? (
        <>
            <textarea id="hashlist" disabled={verifyingHashlist} name="hashlist" onChange={(e) => hashlistConsumer.setHashlist(e.target.value)} value={hashlistConsumer.hashlist} className="min-h-[160px] w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea>
            {wireless ? (
                <label htmlFor="hashlist" className="mx-auto mb-5 text-sm leading-7 text-gray-600">
                    {isPMKID ? 'Paste your WPA PMKID here, multiple APs not allowed' : 'Paste your WPA hash (-m 22000) here, only one hash per task allowed'}
                    <span className="text-red-500">*</span>
                </label>
            ) : (
                <label htmlFor="hashlist" className="mx-auto text-sm leading-7 text-gray-600">
                    Paste your hashlist here
                    <span className="text-red-500">*</span>
                </label>
            )}
        </>
    ) : null;
}

export default HashlistText;
