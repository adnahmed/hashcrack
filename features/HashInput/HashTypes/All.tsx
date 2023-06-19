import HashlistContext from '@/Context/HashlistContext';
import hashTypes from '@/assets/hash-types.json';
import { verifyHashlist } from '@/features/NewTask/newTaskSlice';
import { useAppDispatch } from '@/lib/redux/store';
import clsx from 'clsx';
import HashlistDnD from '@/components/HashlistDnD';
import HashlistText from '@/components/HashlistText';
import Head from 'next/head';
import Script from 'next/script';
import { useCallback, useContext } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { HashInputInstructions, HashInputProps } from '../HashInput';

const AllHashTypes: React.FunctionComponent<HashInputProps> = ({ hashType }) => {
    const { options } = hashTypes;
    const wirelessNetworkGroup = options.find((p) => /wireless networks/i.test(p['name']));
    const isWireless = wirelessNetworkGroup?.items.find((p) => p['value'] === hashType);

    return !isWireless ? (
        <>
            <Head>
                <title>Add Hashlist</title>
            </Head>
            <HashlistText />
            <p className="mx-auto mb-4 text-lg leading-7 text-gray-800">{'OR'}</p>
            <HashlistDnD />
            <HashInputInstructions wireless={false} />
        </>
    ) : null;
};

export default AllHashTypes;
