import { Table } from "flowbite-react";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    // Fetch Tasks // async is better.
    // and also websockets are cool.
    props: {},
  };
};

export default function TaskTable() {
  return (
    <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell>Task ID</Table.HeadCell>
        <Table.HeadCell>Type</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
        <Table.HeadCell>Priority</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>Time Spent</Table.HeadCell>
        <Table.HeadCell>Attack Configuration</Table.HeadCell>
        <Table.HeadCell>Result</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y ">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="!px-6">Task ID</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Type
          </Table.Cell>
          <Table.Cell className="break-all line-clamp-1">
            Description
          </Table.Cell>
          <Table.Cell>Priority</Table.Cell>
          <Table.Cell>Status</Table.Cell>
          <Table.Cell>Time Spent</Table.Cell>
          <Table.Cell>Attack Configuration</Table.Cell>
          <Table.Cell>Result</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

/***

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    // Fetch Tasks // async is better.
    // and also websockets are cool.
    props: {},
  };
};

export default function TaskTable() {
  return (
    <div>
      <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Action button</span>
            Action
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdownAction"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownActionButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Reward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Promote
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Activate account
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete User
              </a>
            </div>
          </div>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table
        className={"w-full text-sm text-left text-gray-500 dark:text-gray-400"}
      >
        <thead
          className={
            "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          }
        >
          <tr>
            <th scope="col" className={"px-6 py-3"}>
              Task ID
            </th>
            <th scope="col" className={"px-6 py-3"}>
              Type
            </th>
            <th scope="col" className={"px-6 py-3"}>
              Description
            </th>
            <th scope="col" className={"px-6 py-3"}>
              Priority
            </th>
            <th scope="col" className={"px-6 py-3"}>
              Satus
            </th>
            <th scope="col" className={"px-6 py-3"}>
              Time SpentResultResult
            </th>
            <th scope="col" className={"px-6 py-3"}>
              Attack Configuration
            </th>
            <th scope="col" className={"px-6 py-3"}>
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className={
              "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            }
          >
            <td className={"w-4 p-4"}>
              <div className={"flex items-center"}>
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className={
                    "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  }
                />
                <label htmlFor="checkbox-table-search-1" className={"sr-only"}>
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className={
                "flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              }
            >
              <div className={"pl-3"}></div>
            </th>
            <td className={"px-6 py-4"}>
              RReact DeveloperReact DeveloperReact DeveloperReact DeveloperReact
              DeveloperReact DeveloperReact DeveloperReact DeveloperReact
              DeveloperReact DeveloperReact DeveloperReact DeveloperReact
              DeveloperReact DeveloperReact DeveloperReact Developereact
              Developer
            </td>
            <td className={"px-6 py-4"}>
              <div className={"flex items-center"}>
                <div
                  className={"h-2.5 w-2.5 rounded-full bg-green-500 mr-2"}
                ></div>{" "}
                Online
              </div>
            </td>
            <td className={"px-6 py-4"}>
              <a
                href="#"
                className={
                  "font-medium text-blue-600 dark:text-blue-500 hover:underline"
                }
              >
                Edit userReact DeveloperReact DeveloperReact DeveloperReact
                DeveloperReact DeveloperReact DeveloperReact DeveloperReact
                DeveloperReact DeveloperReact DeveloperReact DeveloperReact
                DeveloperReact Developer
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}























 */
