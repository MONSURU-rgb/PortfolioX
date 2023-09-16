import React from "react";
import { NavBarCommon } from "..";
import { MainContentSection } from "..";

function AddClientMain() {
  return (
    <div className="ml-260 !w-full bg-[#F8F5FF] max-[768px]:!ml-0 min-h-screen flex flex-col">
      <NavBarCommon />
      <MainContentSection />
    </div>
  );
}

export default AddClientMain;
