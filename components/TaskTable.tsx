import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

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
        <div className="mx-fl-2xl my-fl-md ">
            <div className=" relative overflow-x-auto  p-fl-md shadow-md sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead className="border-gray-700 bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Apple MacBook Pro 17&quot;
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">White</td>
                            <td className="px-6 py-4">Laptop PC</td>
                            <td className="px-6 py-4">$1999</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">Black</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$99</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Apple Watch
                            </th>
                            <td className="px-6 py-4">Black</td>
                            <td className="px-6 py-4">Watches</td>
                            <td className="px-6 py-4">$199</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Apple iMac
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">PC</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Apple AirPods
                            </th>
                            <td className="px-6 py-4">White</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$399</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                iPad Pro
                            </th>
                            <td className="px-6 py-4">Gold</td>
                            <td className="px-6 py-4">Tablet</td>
                            <td className="px-6 py-4">$699</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Magic Keyboard
                            </th>
                            <td className="px-6 py-4">Black</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$99</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Smart Folio iPad Air
                            </th>
                            <td className="px-6 py-4">Blue</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$79</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                AirTag
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$29</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
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
        </div>
    );
}

/*
        <>
            <Table className="border-spacing-fl-3xs ">
                <Thead>
                    <Tr className="[&>*]:text-fl-2xs-lg [&>*]:bg-[var(--theme)] [&>*]:p-fl-3xs-2xs [&>*]:text-center">
                        <Th>Task ID</Th>
                        <Th>Type</Th>
                        <Th>Description</Th>
                        <Th>Priority</Th>
                        <Th>Status</Th>
                        <Th>Time Spent</Th>
                        <Th>Attack Configuration</Th>
                        <Th>Result</Th>
                    </Tr>
                </Thead>
                <Tbody className="divide-y ">
                    {Array.from({ length: 100 }).map((v, i) => (
                        <Tr key={i} className=":border-gray-700 bg-white dark:bg-gray-800">
                            <Td>Task ID</Td>
                            <Td className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Type</Td>
                            <Td className="line-clamp-1 break-all">Description</Td>
                            <Td>Priority</Td>
                            <Td>Status</Td>
                            <Td>Time Spent</Td>
                            <Td>Attack Configuration</Td>
                            <Td>Result</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <BackToTopButton />
        </>
*/
