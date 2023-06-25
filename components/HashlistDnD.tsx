import HashlistContext from '@/Context/HashlistContext';
import { WPACaptureFileTypes } from '@/features/HashInput/HashTypes/Wireless/EAPOL';
import { selectedHashlistFile } from '@/features/NewTask/newTaskSlice';
import { useAppDispatch } from '@/lib/redux/store';
import clsx from 'clsx';
import { useContext } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
interface HashlistDnDProps {
    wireless?: boolean;
}
const HashlistDnD = ({ wireless = false }: HashlistDnDProps) => {
    const dispatch = useAppDispatch();
    const hashlistConsumer = useContext(HashlistContext);
    const usingTextArea = hashlistConsumer !== null && hashlistConsumer.hashlist.length !== 0;
    const acceptedFiles = wireless ?  {
            'application/octet-stream': WPACaptureFileTypes,
    } : undefined;

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop: (acceptedFiles: FileWithPath[]) => {
        if (acceptedFiles.length === 0) return;
        const accFile = acceptedFiles[0];
        const type = accFile.path?.split('.')?.pop();
        if (!type) {
            toast.error('Could not detect file type')
            return;
        }
        dispatch(selectedHashlistFile( { dataUrl: URL.createObjectURL(accFile), type, size: accFile.size} ));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },
        maxFiles: 1,
        accept: acceptedFiles,
        noClick: usingTextArea,
    });
    return (
        <div {...getRootProps({ className: clsx({ dropzone: true, 'border-gray-500': true, 'bg-green-100': isDragReject, 'border-green-300': isDragReject }) })}>
            <input name="hashlistFile" {...getInputProps()} />
            <p className="dropzone-p">{!isDragActive ? (wireless ? 'Drag here .hccap, .hccapx, .cap, .pcap with WPA handshake or click to browse' : 'Drag here hashlist file or click to browse') : 'Drop file here...'}</p>
        </div>
    );
};

export default HashlistDnD;
