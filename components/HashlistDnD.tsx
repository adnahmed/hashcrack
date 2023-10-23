import HashlistContext from '@/Context/HashlistContext';
import { WPACaptureFileTypes } from '@/assets/constants';
import { selectedHashlistFile } from '@/features/NewTask/newTaskSlice';
import { useAppDispatch } from '@/lib/redux/store';
import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
interface HashlistDnDProps {
    wireless?: boolean;
}
const HashlistDnD = ({ wireless = false }: HashlistDnDProps) => {
    const dispatch = useAppDispatch();
    const hashlistConsumer = useContext(HashlistContext);
    const [currentHashlistFile, setCurrentHashlistFile] = useState<FileWithPath | undefined>();
    const [currentLabel, setCurrentLabel] = useState<string | undefined>();
    const usingTextArea = hashlistConsumer !== null && hashlistConsumer.hashlist.length !== 0;
    const acceptedFiles = wireless
        ? {
              'application/octet-stream': WPACaptureFileTypes,
          }
        : undefined;
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop: (acceptedFiles: FileWithPath[]) => {
            if (acceptedFiles.length === 0) return;
            const accFile = acceptedFiles[0];
            const type = accFile.path?.split('.')?.pop();
            if (!type) {
                toast.error('Could not detect file type');
                return;
            }
            setCurrentHashlistFile(accFile);
            dispatch(selectedHashlistFile({ dataUrl: URL.createObjectURL(accFile), type, size: accFile.size }));
        },
        maxFiles: 1,
        accept: acceptedFiles,
        noClick: usingTextArea,
    });
    useEffect(() => {
        if (isDragActive) {
            setCurrentLabel('Drop file here...');
            return;
        }
        if (currentHashlistFile) {
            setCurrentLabel(currentHashlistFile.name);
            return;
        }
        if (wireless) setCurrentLabel('Drag here .hccap, .hccapx, .cap, .pcap or .pcapng with WPA handshake or click to browse');
        setCurrentLabel('Drag here hashlist file or click to browse');
    }, [currentHashlistFile, isDragActive, wireless]);
    return (
        <div {...getRootProps({ className: clsx({ dropzone: true, 'border-gray-500': true, 'bg-green-100': isDragReject, 'border-green-300': isDragReject, 'border-blue-500': isDragActive, 'bg-blue-100': isDragActive, 'bg-[var(--theme-bg)]': currentHashlistFile, 'border-[var(--theme)]': currentHashlistFile }) })}>
            <input name="hashlistFile" {...getInputProps()} />
            <p className={`dropzone-p ${currentHashlistFile ? 'text-fl-lg text-[var(--theme)] ' : 'text-fl-sm md:text-fl-base'}`}>{currentLabel}</p>
        </div>
    );
};

export default HashlistDnD;
