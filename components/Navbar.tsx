import NewTask from "@/features/NewTask/NewTask";
import style from "@/styles/Navbar.module.css";
import { Tabs } from "flowbite-react";
import ContactUs from "./ContactUs";
import TaskQueue from "./TaskQueue";
export default function Navbar() {
  return (
    <div className={style.navbar}>
      <Tabs.Group
        className="!flex !justify-center"
        aria-label="Full width tabs"
        style="default"
      >
        <Tabs.Item title="Tasks Queue">
          <TaskQueue />
        </Tabs.Item>
        <Tabs.Item title="Add New Task">
          <NewTask />
        </Tabs.Item>
        <Tabs.Item title="Get Result">Get Result</Tabs.Item>
        <Tabs.Item title="Verify Service">Verify Service</Tabs.Item>
        <Tabs.Item title="Contact Us">
          <ContactUs />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
