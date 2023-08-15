import React, { ComponentProps, ReactNode } from "react";
import { Logo } from "..";
import { FirstSidebarList } from "./first-side-bar-list";
import { SecondSideBarList } from "./second-side-bar-list";

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
