import React, { useState } from "react";
import { DateInput } from "@mantine/dates";
import { CalendarMonth } from "./data-icon";
import { Button, Popover, Table } from "@mantine/core";
import { ArrowDropDown } from "./drop-down";
import ActionIcon from "./action-icon";
import { data1 } from "./data-for-table";
import { builder } from "@/api/builder";
import { token } from "@/api/axios-config";
import { ClientList } from "../common/type";

import { useQuery } from "@tanstack/react-query";
import { cookieStorage, usePortal } from "@ibnlanre/portal";
import { GenerateReportButton, TableHeader } from "../common/tableheader";

function CustomersListTable() {
  const [value, setValue] = useState<Date | null>(null);
  const [placeholderValue, setPlaceholderValue] = useState("Last Week");
  const test = "Active";

  const { data } = useQuery({
    queryFn: async () => await builder.use().users.fetch(),
    queryKey: builder.users.fetch.get(),
  });

  const customerList = data?.data?.data;
  console.log(data?.data?.data);

  const tester = JSON.parse(cookieStorage.getItem("my-user") as string);

  return (
    <div className="p-30 flex flex-col rounded-[14px] px-30 pt-22 bg-white mx-30 max-[580px]:overflow-x-auto">
      <TableHeader header="Customers List" button={<GenerateReportButton />} />
      <section className="max-[580px]:overflow-x-auto">
        <Table striped highlightOnHover verticalSpacing={16}>
          <thead>
            <tr className="!rounded-[10px] bg-[#F8F5FF] text-[#5F6868] text-16 font-normal">
              <th>Customer’s Name</th>
              <th>Portfolio</th>
              <th>Gender</th>
              <th>Portfolio Manager</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customerList?.map((item: any) => (
              <tr
                key={item?.name}
                className="text-14 text-[#737B7B] hover:!bg-[#F8F5FF] !rounded-[10px]">
                <td>
                  {item?.client_first_name} {item?.client_last_name}
                </td>
                <td>{item?.client_industry?.industry_name}</td>
                <td>male</td>
                <td>
                  {tester?.first_name} {tester?.last_name}
                </td>
                <td>
                  <ActionIcon />
                </td>
                <td>
                  {item?.status === true ? (
                    <span className="text-[#56C456] text-12 px-18 py-2 bg-[#F5FBF5]">
                      Active
                    </span>
                  ) : (
                    <span className="text-[#F26E6E] text-12 px-18 py-2 bg-[#FFF5F5]">
                      Inactive
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default CustomersListTable;
