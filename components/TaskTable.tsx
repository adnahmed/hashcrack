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
          <Table.Cell>Task ID</Table.Cell>
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
