import hashTypes from '@/assets/hash-types.json';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import { HashInputInstructions, HashInputProps } from '../HashInput';
const AllHashTypes: React.FunctionComponent<HashInputProps> = ({ hashType }) => {
    const { options } = hashTypes;
    const wirelessNetworkGroup = options.find((p) => /wireless networks/i.test(p['name']));
    const isWireless = wirelessNetworkGroup?.items.find((p) => p['value'] === hashType);
    const { acceptedFiles, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone();
    return !isWireless ? (
        <>
            <textarea id="hashlist" name="hashlist" className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"></textarea>
            <label htmlFor="hashlist" className="mx-auto text-sm leading-7 text-gray-600">
                Paste your hashlist here
                <span className="text-red-500">*</span>
            </label>
            <p className="mx-auto mb-4 text-lg leading-7 text-gray-800">OR</p>
            <div {...getRootProps({ className: clsx({ dropzone: true, 'bg-red-100': isDragReject, 'border-red-500': isDragReject, 'bg-green-100': isDragAccept, 'border-green-300': isDragAccept }) })}>
                <input name="hashlistFile" {...getInputProps()} />
                <p className="dropzone-p"> {!isDragActive ? 'Drag here hashlist file or click to browse' : 'Drop file here...'}</p>
            </div>
            <HashInputInstructions wireless={false} />
        </>
    ) : null;
};

export default AllHashTypes;
