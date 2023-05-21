import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { GetServerSideProps } from "next";
import { useEffect, useLayoutEffect, useState } from "react";

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
    if (typeof window !== "undefined") {
      window.global = window;
      setShowChild(true);
    }
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }
  return (
    <Table className="border-spacing-fl-3xs " hoverable={true}>
      <Thead>
        <Tr className="[&>*]:px-fl-3xs-2xs [&>*]:py-fl-3xs-2xs [&>*]:text-fl-2xs-lg [&>*]:text-center [&>*]:bg-[var(--theme)] ">
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
        {Array.from({ length: 10 }).map((v, i) => (
          <Tr
            key={i} dark
            className="bg-white :border-gray-700 dark:bg-gray-800"
          >
            <Td>Task ID</Td>
            <Td className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Type
            </Td>
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
  );
}
