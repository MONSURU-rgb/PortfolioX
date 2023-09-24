import React, { ReactNode } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { NavBarCommon } from "../common";
import { TableHeader } from "../common/tableheader";
import { Flex, Skeleton, Table, Text } from "@mantine/core";
import { TextWithDownArrowIcon } from "../dashboard/main";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { FBRXIcon } from "../icons/fbrxIcon";
import { CompleteStatusIcon } from "../icons/completeStatusIcon";
import { PendingStatusIcon } from "../icons/pendingStatusIcon";
import { OnHoldIcon } from "../icons/onHoldIcon";
import { JsonServerProps } from "./portfoliomaincomponent";

export function TransactionHistory() {
  return (
    <div className="bg-[var(--light-bg)] flex">
      <Sidebar />
      <div className="ml-260 !w-full bg-[var(--lightbg)] max-[768px]:!ml-0">
        <NavBarCommon />
        <PortfolioTransactionHistory />
      </div>
    </div>
  );
}

function PortfolioTransactionHistory() {
  const { data, isLoading } = useQuery({
    queryFn: async () => await builder.use().users.porfolio_transaction_list(),
    queryKey: builder.users.porfolio_list.get(),
    select: (data) => data?.data,
  });
  const clientPortfolio = data;

  // if (isLoading) return <TableSkeleton isLoading={isLoading} />;
  return (
    <div>
      <TableSkeleton isLoading={isLoading}>
        <div className="p-30 flex flex-col rounded-[14px] px-30 pt-22 bg-white mx-30 mt-44">
          <TableHeader header="Transaction History" button={null} />

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

              {/* const drawerContent = clientPortfolio.find((item) => item.id == id); 
              const {mutate } = useMutation({
              mutationKey: ["status"],
              mutationFn: async (value) => axios.patch(url, value)
              })
            */}

              <tbody>
                {clientPortfolio?.map(
                  ({ id, title, date, amount, status }: JsonServerProps) => (
                    <tr
                      className="text-[#1A202C] text-14 font-semibold"
                      key={id}>
                      <td>
                        <Flex gap={10} justify="start" align="center">
                          <FBRXIcon />
                          <Text>{title}</Text>
                        </Flex>
                      </td>
                      <td>{date}</td>
                      <td>{amount}</td>
                      {/* <td>{status}</td> */}

                      <td>
                        <Flex gap={8} align="center">
                          {status === "Completed" ? (
                            <CompleteStatusIcon />
                          ) : status === "Pending" ? (
                            <PendingStatusIcon />
                          ) : (
                            <OnHoldIcon />
                          )}
                          {status}
                        </Flex>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </section>
        </div>
      </TableSkeleton>
    </div>
  );
}

export function TableSkeleton({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: ReactNode;
}) {
  console.log(isLoading);
  return (
    <>
      {isLoading && (
        <>
          <Skeleton height={50} circle mb="xl" visible={isLoading} />
          <Skeleton height={40} radius="xl" visible={isLoading} />
          <Skeleton height={40} mt={6} radius="xl" visible={isLoading} />
          <Skeleton
            height={40}
            mt={6}
            width="90%"
            radius="xl"
            visible={isLoading}
          />

          <Skeleton height={50} circle mb="xl" visible={isLoading} />
          <Skeleton height={40} radius="xl" visible={isLoading} />
          <Skeleton height={40} mt={6} radius="xl" visible={isLoading} />
          <Skeleton
            height={40}
            mt={6}
            width="90%"
            radius="xl"
            visible={isLoading}
          />
        </>
      )}

      {children}
    </>
  );
}
