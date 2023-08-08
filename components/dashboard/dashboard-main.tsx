import React from "react";
import { NavBarCommon } from "@/components";
import { Sidebar } from "../sidebar/sidebar";
import { Main } from "./main";

export function DashboardMain() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}
