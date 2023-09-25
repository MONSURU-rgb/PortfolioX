import Messages from "@/public/messages";
import Calls from "@/public/calls";
import Customers from "@/public/customers";
import Industries from "@/public/industries";
import Dashboard from "@/public/dashboard";
import Portfolio from "@/public/portfolio";
import { ReactNode } from "react";

type ListItem = {
  title: string;
  icon: ReactNode;
  path: string;
};

type SideBarList = ListItem[];

export const sideBarList: SideBarList = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    path: "/dashboard",
  },
  {
    title: "Portfolios",
    icon: <Portfolio />,
    path: "/portfolios",
  },
  {
    title: "Industries",
    icon: <Industries />,
    path: "/industries",
  },
  {
    title: "Customers",
    icon: <Customers />,
    path: "/customers",
  },
  {
    title: "Messages",
    icon: <Messages />,
    path: "/messages",
  },
  {
    title: "Calls",
    icon: <Calls />,
    path: "/calls",
  },
];
