import NewTask from "@/features/NewTask/NewTask";
import { ReactNode } from "react";
import TaskQueue from "../TaskQueue";
import ContactUs from "../ContactUs";

export interface Tabs {
  [key: string]: ReactNode
}

export const TabsEnum: Tabs = {
  "Tasks Queue": <TaskQueue />,
  "Add New Tasks": <NewTask />,
  "Get Result": <div></div>,
  "Verify Service": <div></div>,
  "Contact Us": <ContactUs />
}
export const TabLabels = Object.keys(TabsEnum)
