import React, { ComponentProps, ReactNode } from "react";
import { AddClientButton, Logo } from "..";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ListItem } from "@mantine/core/lib/List/ListItem/ListItem";
import Messages from "@/public/messages";
import Calls from "@/public/calls";
import Customers from "@/public/customers";
import Industries from "@/public/industries";
import Dashboard from "@/public/dashboard";
import Portfolio from "@/public/portfolio";
import Settings from "@/public/settings";
import Logout from "@/public/logout";

type ListItem = {
  title: string;
  icon: ReactNode;
  path: string;
};

type SideBarList = ListItem[];

const sideBarList: SideBarList = [
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
    title: "industries",
    icon: <Industries />,
    path: "/industries",
  },
  {
    title: "customers",
    icon: <Customers />,
    path: "/customers",
  },
  {
    title: "Messages",
    icon: <Messages />,
    path: "/messages",
  },
  {
    title: "calls",
    icon: <Calls />,
    path: "/calls",
  },
];

const sideBarFooterList = [
  {
    title: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
  {
    title: "Log Out",
    icon: <Logout />,
    path: "/logout",
  },
];

function SecondSideBarList() {
  const { push, asPath } = useRouter();
  const activeCheck = (link: string) => link === asPath;
  return (
    <div className="px-[10px] flex flex-col gap-16 pb-88">
      {sideBarFooterList.map((listItem: ListItem) => (
        <span
          className={`flex gap-18 w-full pl-18 items-center rounded ${
            activeCheck(listItem.path)
              ? "text-[var(--violet)] bg-[#F8F5FF]"
              : "text-[#A6ACB8]"
          }`}
          key={listItem.title}>
          <figure
            className={`relative w-20 h-20 ${
              activeCheck(listItem.path)
                ? "text-[var(--violet)]"
                : "text-[#A6ACB8]"
            }`}>
            {listItem.icon}
            {/* <Image src={listItem.icon} fill alt="dashboard Image"></Image> */}
          </figure>
          <h2 className="text-18 font-medium">{listItem.title}</h2>
        </span>
      ))}
    </div>
  );
}

function FirstSidebarList() {
  const { push, asPath } = useRouter();
  const activeCheck = (link: string) => link === asPath;

  return (
    <div>
      <div className="pt-51 px-[10px] flex flex-col gap-1">
        {sideBarList.map((listItem: ListItem) => (
          <Link href={listItem.path} key={listItem.title}>
            <span
              className={`flex gap-18 w-full pl-18 py-12 items-center rounded ${
                activeCheck(listItem.path)
                  ? "text-[var(--violet)] bg-[#F8F5FF]"
                  : "text-[#A6ACB8]"
              }`}>
              <figure
                className={`relative w-20 h-20 ${
                  activeCheck(listItem.path)
                    ? "text-[var(--violet)]"
                    : "text-[#A6ACB8]"
                }`}>
                {listItem.icon}
              </figure>
              <h2 className="text-18 font-medium">{listItem.title}</h2>
            </span>
          </Link>
        ))}
      </div>

      <section className="pl-28 pt-[25px]">
        <AddClientButton />
      </section>
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="fixed bg-white h-screen w-260 max-[768px]:hidden">
      <Logo className="pl-32 pt-22" />
      <section className="flex flex-col justify-between h-full">
        <FirstSidebarList />
        <SecondSideBarList />
      </section>
    </div>
  );
}
