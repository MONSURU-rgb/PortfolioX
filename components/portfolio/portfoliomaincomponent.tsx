import React from "react";
import { SecondChart } from "../dashboard/main";
import { Divider } from "@mantine/core";

export function PortfolioMainComponent() {
  return (
    <div className="p-30 flex flex-wrap gap-30">
      <section className="bg-white pl-51 pt-34 rounded-[14px] w-[5/12] pr-40">
        <SecondChart text="Top Clients By Sector" size={190} />
      </section>
      <section className="bg-white pl-51 pt-34 rounded-[14px] w-[5/12] pr-40">
        <SecondChart text="Top Clients By Sector" size={190} />
      </section>
    </div>
  );
}

function TopNews() {
  return <div></div>;
}
