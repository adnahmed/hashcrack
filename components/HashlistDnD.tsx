import HashlistContext from '@/Context/HashlistContext';
import { WPACaptureFileTypes } from '@/features/HashInput/HashTypes/Wireless/EAPOL';
import { selectedHashlistFile } from '@/features/NewTask/newTaskSlice';
import { useAppDispatch } from '@/lib/redux/store';
import clsx from 'clsx';
import { useCallback, useContext } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
interface HashlistDnDProps {
    wireless?: boolean;
}
const HashlistDnD = ({ wireless = false }: HashlistDnDProps) => {
    const dispatch = useAppDispatch();

    const hashlistConsumer = useContext(HashlistContext);
    const usingTextArea = hashlistConsumer !== null && hashlistConsumer.hashlist.length !== 0;
    const onDrop = useCallback<NonNullable<DropzoneOptions['onDrop']>>(async (acceptedFiles) => {
        dispatch(selectedHashlistFile(acceptedFiles[0]));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'application/octet-stream': WPACaptureFileTypes,
        },
        noClick: usingTextArea,
    });
    return (
        <div {...getRootProps({ className: clsx({ dropzone: true, 'border-gray-500': true, 'bg-green-100': isDragReject, 'border-green-300': isDragReject }) })}>
            <input name="capFile" {...getInputProps()} />
            <p className="dropzone-p">{!isDragActive ? (wireless ? 'Drag here .hccap, .hccapx, .cap, .pcap with WPA handshake or click to browse' : 'Drag here hashlist file or click to browse') : 'Drop file here...'}</p>
        </div>
    );
};

export default HashlistDnD;
