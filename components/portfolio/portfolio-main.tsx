import { NavBarCommon } from "@/components";
import { Sidebar } from "../sidebar/sidebar";

export function PortfolioMain() {
  return (
    <div className="bg-[var(--light-bg)] flex">
      <Sidebar />
      <NavBarCommon />
    </div>
  );
}
