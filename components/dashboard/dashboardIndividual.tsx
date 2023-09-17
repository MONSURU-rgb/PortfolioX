import { useRouter } from "next/router";
import React from "react";
import { Sidebar } from "../sidebar/sidebar";
import { Main } from "./main";
import { NavBarCommon } from "../common";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { ClientDetails } from "../common/client-details";
import { GreatBritainIcon } from "../icons/greatBritainIcon";
import { Flex, Text } from "@mantine/core";
import { DashboardIndividualClientDetails } from "./dashboardIndividualClientDetails";

export function DashboardIndividual() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div className="flex">
      <Sidebar />
      <DashboardIndividualMainPage />
    </div>
  );
}

function DashboardIndividualMainPage() {
  const { query } = useRouter();
  console.log(query);
  const { data } = useQuery({
    queryFn: async () => await builder.use().users.fetch(),
    queryKey: builder.users.fetch.get(),
  });

  const result = data?.data?.data
    ?.map((data: any) => data)
    .filter((data: any) => data.client_industry?.id == query.id);

  const name = `${result[0]?.client_first_name} ${result[0]?.client_last_name}`;

  console.log(result[0]?.client_first_name);
  return (
    <main className="ml-260 !w-full bg-[#F8F5FF] flex flex-col min-h-screen max-[768px]:!ml-0">
      <NavBarCommon />
      <section className="m-30 flex gap-30 !overflow-x-auto flex-col bg-white rounded-[15px] flex-grow">
        <article className="bg-white w-full flex flex-col rounded-[15px]">
          <article
            className="flex justify-between pb-24 pt-[clamp(48px,5vw,88px)] mx-45"
            style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.25)" }}>
            <article className="flex gap-2">
              <GreatBritainIcon />
              <span className="text-[#000] text-24 font-semibold">
                Great Britain Pounds
              </span>
            </article>
            <DashboardIndividualClientDetails name={name} />
          </article>
          <section className="flex bg-[white]">
            <article className="pt-35 grid grid-cols-3 justify-between mx-45 gap-20 !w-full max-[580px]:flex max-[580px]:flex-wrap">
              <Flex direction="column" color="#000">
                <h4 className="text-12 uppercase font-normal">Account Name</h4>
                <h2 className="text-[clamp(16px,1.4vw,21px)] text-normal font-Inter">
                  {name}
                </h2>
              </Flex>

              <Flex direction="column" color="#000">
                <h4 className="text-12 uppercase font-normal">
                  Account Number
                </h4>
                <h2 className="text-[clamp(16px,1.4vw,21px)] text-normal font-Inter">
                  987654321000
                </h2>
              </Flex>

              <Flex direction="column" color="#000">
                <h4 className="text-12 uppercase font-normal">VNB</h4>
                <h2 className="text-[clamp(16px,1.4vw,21px)] text-normal font-Inter">
                  9ER5AD43210GW00
                </h2>
              </Flex>
              <Flex direction="column" color="#000">
                <h4 className="text-12 uppercase font-normal">
                  Contact Officer
                </h4>
                <h2 className="text-[clamp(16px,1.4vw,21px)] text-normal font-Inter">
                  3636464545635
                </h2>
              </Flex>
            </article>
          </section>
        </article>
      </section>
    </main>
  );
}
