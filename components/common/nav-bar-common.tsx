import React from "react";
import { Logo } from ".";
import { Search } from "./search";
import { ClientDetails } from "./client-details";

export function NavBarCommon() {
  return (
    <div className="flex justify-between gap-40 bg-white pl-60 pt-22 pr-34 pb-24">
      <Search />
      <ClientDetails />
    </div>
  );
}
