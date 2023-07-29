import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import BackToTopButton from './ui/BackToTopButton';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        // Fetch Tasks // async is better.
        // and also websockets are cool.
        props: {},
    };
};

export default function TaskTable() {
    const [showChild, setShowChild] = useState(false);

    // Wait until after client-side hydration to show
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.global = window;
            setShowChild(true);
        }
    }, []);

    if (!showChild) {
        // You can show some kind of placeholder UI here
        return null;
    }
    return (
        <div className="m-auto max-w-[100rem] ">
            <div className="relative overflow-x-auto p-fl-md shadow-md  sm:rounded-lg">
                <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                    <Thead className="gap-x-16 border-y border-gray-200 bg-gray-100 p-4 text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                        <Tr className="grid grid-cols-9">
                            <Th scope="col" className="px-2 py-3">
                                Task ID
                            </Th>

                            <Th scope="col" className="px-2 py-3">
                                Type
                            </Th>
                            <Th scope="col" className="px-2 py-3">
                                Attack Configuration
                            </Th>
                            <Th scope="col" className="px-2 py-3">
                                Priority
                            </Th>
                            <Th scope="col" className="px-2 py-3">
                                Status
                            </Th>
                            <Th scope="col" className="px-2 py-3">
                                Time Spent
                            </Th>

                            <Th scope="col" className="col-span-2 px-2 py-3">
                                Description
                            </Th>
                            <Th scope="col" className="px-2 py-3">
                                Result
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody className="divide-y">
                        {Array.from({ length: 10 }).map((v, i) => (
                            <Tr key={i} className="grid grid-cols-9 border-b bg-white text-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                <Td className="px-2 py-4">Task ID</Td>
                                <Td className="px-2 py-4">Type</Td>
                                <Td className="px-2 py-4">Attack Configuration</Td>
                                <Td className="px-2 py-4">Priority</Td>
                                <Td className="px-2 py-4">Status</Td>
                                <Td className="px-2 py-4">Time Spent</Td>
                                <Td className="col-span-2 px-2 py-4">Description</Td>
                                <Td className="px-2 py-4">Result</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <nav className="flex items-center justify-between pt-4 " aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                    </span>
                    <ul className="inline-flex h-8 -space-x-px text-sm">
                        <li>
                            <a href="#" className="ml-0 flex h-8 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Previous
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                4
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                5
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex h-8 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <BackToTopButton />
        </div>
    );
}
