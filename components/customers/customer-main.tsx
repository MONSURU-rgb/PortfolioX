import React from "react";
import { NavBarCommon } from "@/components";
import { Sidebar } from "../sidebar/sidebar";
import MainCustomer from "./main-customer";

export function CustomerMain() {
  return (
    <div className="bg-[var(--light-bg)] flex">
      <Sidebar />
      <MainCustomer />
    </div>
  );
}
