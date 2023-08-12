import React from "react";
import { Sidebar } from "../sidebar/sidebar";
import AddClientMain from "./add-client-main";

export function AddClient() {
  return (
    <div className="bg-[var(--light-bg)] flex">
      <Sidebar />
      <AddClientMain />
    </div>
  );
}
