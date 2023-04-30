import NewTask from "@/features/NewTask/NewTask";
import { Tabs } from "flowbite-react";
export default function Navbar() {
  return (
    <>
      <Tabs.Group aria-label="Full width tabs" style="default">
        <Tabs.Item title="Tasks Queue">Tasks Queue</Tabs.Item>
        <Tabs.Item title="Add New Task">
          <NewTask />
        </Tabs.Item>
        <Tabs.Item title="Get Result">Get Result</Tabs.Item>
        <Tabs.Item title="Verify Service">Verify Service</Tabs.Item>
        <Tabs.Item title="Contact Us">Contact Us</Tabs.Item>
      </Tabs.Group>
    </>
  );
}
