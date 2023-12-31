import React from "react";
import { NavBarCommon } from "@/components";
import { Sidebar } from "../sidebar/sidebar";

export function CallMain() {
  return (
    <div className="bg-[var(--light-bg)] flex">
      <Sidebar />
      <NavBarCommon />
    </div>
  );
}
