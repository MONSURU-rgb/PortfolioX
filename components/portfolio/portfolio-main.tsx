import { NavBarCommon } from "@/components";
import { Sidebar } from "../sidebar/sidebar";
import CustomerList from "../customers/customer-list";
import { PortfolioMainComponent } from "./portfoliomaincomponent";

export function PortfolioMain() {
  return (
    <div className="bg-[var(--light-bg)] flex">
      <Sidebar />
      <div className="ml-260 !w-full bg-[var(--lightbg)] max-[768px]:!ml-0">
        <NavBarCommon />
        <PortfolioMainComponent />
      </div>
    </div>
  );
}
