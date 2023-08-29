import { changedPrivacyMode, changedResultEmail, selectPrivacyMode, selectResultEmail } from '@/features/NewTask/newTaskSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/store';
import styles from '@/styles/ExtraStep.module.css';
import { Checkbox } from '@patternfly/react-core';
import { useState } from 'react';

function ExtraStep() {
    const isPrivacyMode = useAppSelector(selectPrivacyMode);
    const resultEmail = useAppSelector(selectResultEmail);
    const [email, setEmail] = useState('');
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col flex-wrap justify-start gap-fl-xs">
            <Checkbox
                id="privacy_mode"
                label={`Privacy Mode (${process.env.NEXT_PUBLIC_Privacy_Mode_Price})`}
                isChecked={isPrivacyMode}
                onChange={() => {
                    dispatch(changedPrivacyMode(!isPrivacyMode));
                }}
            />
            <div className={styles.textInput}>
                <div className="relative">
                    <label htmlFor="name" className="text-sm leading-9 text-gray-600">
                        Email (Optional)
                    </label>
                    <input type="email" value={isPrivacyMode ? resultEmail : email} onChange={(e) => setEmail(e.target.value)} onBlur={() => dispatch(changedResultEmail(email))} id="email" name="email" disabled={isPrivacyMode} className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out invalid:border-red-300 invalid:bg-[var(--theme-bg)] invalid:ring-2 invalid:ring-red-200 focus:bg-white focus:ring-2 valid:focus:border-indigo-500 valid:focus:ring-indigo-200 disabled:bg-gray-300" />
                </div>
            </div>
        </div>
    );
}

export default ExtraStep;
