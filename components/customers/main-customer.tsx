import React from "react";
import { NavBarCommon } from "..";
import CustomerList from "./customer-list";

function MainCustomer() {
  return (
    <div className="ml-260 !w-full bg-[var(--lightbg)]">
      <NavBarCommon />
      <CustomerList />
    </div>
  );
}

export default MainCustomer;
