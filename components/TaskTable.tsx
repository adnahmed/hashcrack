import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
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
      <Thead>
        <Tr className="[&>*]:px-fl-2xs [&>*]:py-fl-sm [&>*]:text-center">
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
            key={i}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
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
