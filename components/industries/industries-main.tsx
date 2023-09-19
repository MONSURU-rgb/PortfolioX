import { NavBarCommon } from "@/components";
import { Sidebar } from "../sidebar/sidebar";
import { IndustriesMainPage } from "./industriesMainPage";

export function IndustriesMain() {
  return (
    <div className="bg-[var(--light-bg)] flex">
      <Sidebar />
      <div className="ml-260 !w-full bg-[var(--lightbg)] max-[768px]:!ml-0 flex flex-col min-h-screen">
        <NavBarCommon />
        <section className="px-30">
          <IndustriesMainPage />
        </section>
      </div>
    </div>
  );
}
