import React, { ReactNode, useState } from "react";
import { SecondChart, TextWithDownArrowIcon } from "../dashboard/main";
import {
  Box,
  Divider,
  Flex,
  Grid,
  Group,
  Modal,
  Table,
  Text,
} from "@mantine/core";
import { TopNewsIcon } from "@/public/topNewsIcon";
import { NasdaqIcon } from "@/public/nasdaq";
import { NasdaqDropDownIcon } from "@/public/nasdaqDropDown";
import { TableHeader } from "../common/tableheader";
import { FBRXIcon } from "../icons/fbrxIcon";
import { CompleteStatusIcon } from "../icons/completeStatusIcon";
import { PendingStatusIcon } from "../icons/pendingStatusIcon";
import { OnHoldIcon } from "../icons/onHoldIcon";
import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";
import { PortfolioModal } from "../modal/portfolioModal";

export interface JsonServerProps {
  id: number;
  title: string;
  date: string;
  amount: string;
  status: string;
}

// useQuery.invalidatequeries to refetch the data

export function PortfolioMainComponent() {
  const [status, setStatus] = useState("completed");
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = useQuery({
    queryFn: async () => await builder.use().users.porfolio_list(),
    queryKey: builder.users.porfolio_list.get(),
    select: (data) => data?.data,
  });
  const clientPortfolio = data;

  const [modalProps, setModalProps] = useState<{
    opened: boolean;
    component: ReactNode;
  }>({
    opened: false,
    component: null,
  });

  return (
    <>
      <div className="p-30 flex flex-wrap gap-30 max-[560px]:grid">
        <section className="bg-white pl-51 pt-34 rounded-[14px] w-4/12 pr-40 !flex-grow max-[560px]:w-full">
          <SecondChart text="Top Clients By Sector" size={190} />
        </section>
        <section className="bg-white pl-51 pt-34 rounded-[14px] w-4/12 pr-40 flex-grow max-[560px]:w-full">
          <SecondChart text="Top Clients By Entity" size={190} />
        </section>

        <div className="w-3/15">
          <TopNews />
        </div>
      </div>
      <div className="p-30 flex flex-col rounded-[14px] px-30 pt-22 bg-white mx-30">
        <TableHeader header="Portfolio History" button={null} />

        <section className="max-[580px]:overflow-x-auto">
          <Table striped highlightOnHover verticalSpacing={16}>
            <thead>
              <tr
                className="!rounded-[10px] text-[#90A3BF] text-12 font-normal"
                style={{
                  borderTop: "1px solid var(--secondary-100, #F3F5F7)",
                  borderBottom: "1px solid var(--secondary-100, #F3F5F7)",
                }}>
                <th>
                  <span className="text-[#90A3BF] text-12">Transactions</span>
                </th>
                <th>
                  <TextWithDownArrowIcon
                    text="Date"
                    bg="white"
                    color="#90A3BF"
                  />
                </th>
                <th>
                  <TextWithDownArrowIcon
                    text="Amount"
                    bg="white"
                    color="#90A3BF"
                  />
                </th>
                <th>
                  <TextWithDownArrowIcon
                    text="Status"
                    bg="white"
                    color="#90A3BF"
                  />
                </th>
              </tr>
            </thead>

            {/* Target how to set a modal based on the component */}

            {/* const drawerContent = clientPortfolio.find((item) => item.id == id); 
              const {mutate } = useMutation({
              mutationKey: ["status"],
              mutationFn: async (value) => axios.patch(url, value)
              })
            */}

            <tbody>
              {clientPortfolio?.map((props: JsonServerProps) => (
                <tr
                  className="text-[#1A202C] text-14 font-semibold"
                  key={props.id}
                  onClick={() => {
                    setModalProps({
                      opened: true,
                      component: <PortfolioModal {...props} />,
                    });
                  }}>
                  <td>
                    <Flex gap={10} justify="start" align="center">
                      <FBRXIcon />
                      <Text>{props.title}</Text>
                    </Flex>
                  </td>
                  <td>
                    {status !== "Completed" ? (
                      <span onClick={open}>{props.date}</span>
                    ) : (
                      <span>{props.date}</span>
                    )}
                  </td>

                  <td>{props.amount}</td>

                  <td>
                    <Flex gap={8} align="center">
                      {props.status === "Completed" ? (
                        <CompleteStatusIcon />
                      ) : props.status === "Pending" ? (
                        <PendingStatusIcon />
                      ) : (
                        <OnHoldIcon />
                      )}
                      {props.status}
                    </Flex>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>

        <Modal
          opened={modalProps.opened}
          onClose={() => {
            setModalProps({
              opened: false,
              component: null,
            });
          }}>
          {modalProps.component}
        </Modal>
      </div>
    </>
  );
}

function TopNews() {
  return (
    <section className="flex flex-col gap-10">
      <article className="px-24 py-18 bg-white flex justify-between rounded-t-[14px]">
        <h2 className="text-[#191635] text-16 font-medium font-jakarta">
          Top News
        </h2>
        <TopNewsIcon />
      </article>

      <article className="bg-white pb-[clamp(18px,2.1vw,36px)] rounded-b-[14px]">
        <NasdaqDailyReport />
        <NasdaqDailyReport />
        <NasdaqDailyReport />
      </article>
    </section>
  );
}

function NasdaqDailyReport() {
  return (
    <Box
      className="pt-20 pl-16 pr-24 flex gap-10 pb-[14px]"
      style={{ borderBottom: "2px dashed #8F8F8F" }}>
      <NasdaqIcon />

      <Flex
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
        className="max-[560px]:!justify-between max-[560px]:!w-full">
        <Flex direction="column">
          <h2 className="text-[#000] text-[10px] font-semibold font-jakarta">
            NASDAQ Daily
          </h2>
          <h4 className="text-[8.25px] font-jakarta font-normal text-[var(--violet)]">
            Giving you live reports from the...
          </h4>
        </Flex>
        <NasdaqDropDownIcon />
      </Flex>
    </Box>
  );
}
