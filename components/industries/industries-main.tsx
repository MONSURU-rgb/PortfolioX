import { NavBarCommon } from "@/components";
import { Sidebar } from "../sidebar/sidebar";

export function IndustriesMain() {
  return (
    <div className="bg-[var(--light-bg)] flex">
      <Sidebar />
      <NavBarCommon />
    </div>
  );
}
