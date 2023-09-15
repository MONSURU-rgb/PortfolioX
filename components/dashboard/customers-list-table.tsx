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
import { useQuery } from "react-query";
import { cookieStorage, usePortal } from "@ibnlanre/portal";

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
      <section className="flex justify-between pb-22 items-center flex-wrap max-[580px]:overflow-x-auto">
        <h2 className="text-18 font-medium text-[#191635]">Customers List</h2>
        <article className="flex gap-45">
          <button className="rounded-[5px] bg-[var(--violet)] px-34 py-12 text-white text-[13px] font-medium leading-none max-[725px]:hidden">
            Generate Report
          </button>
          <figure className="rounded-[10px] bg-[#F8F5FF] pl-18 py-2 flex gap-12 flex-wrap justify-center">
            <button className="flex gap-32 items-center px-12 flex-grow">
              <DateInput
                dateParser={(input) => {
                  if (input === "WW2") {
                    return new Date(1939, 8, 1);
                  }
                  return new Date(input);
                }}
                icon={<CalendarMonth />}
                value={value}
                onChange={setValue}
                valueFormat="DD/MM/YYYY"
                placeholder="FIlter by Date"
                maw={200}
                mx="auto"
                styles={{
                  root: {
                    fontSize: "9.3px",
                    color: "#61677F",
                    fontFamily: "Poppins",
                  },
                }}
              />
            </button>
            <Popover
              width="target"
              position="bottom"
              //   shadow="sm"
              classNames={{
                dropdown: "!bg-[#262830] !px-[8px] !py-[12px]",
              }}>
              <Popover.Target>
                <Button
                  w={85}
                  classNames={{
                    root: "!bg-[#262830] !px-2 !text-[12px] flex gap-22 !w-fit !items-center !justify-center",
                    label: "flex",
                  }}>
                  <h2 className="pr-[23px]">{placeholderValue}</h2>
                  <div className="w-12 h-12">
                    <ArrowDropDown />
                  </div>
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <button
                  className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                  onClick={() => setPlaceholderValue("12 Months")}>
                  12 Months
                </button>

                <button
                  className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                  onClick={() => setPlaceholderValue("6 Months")}>
                  6 Months
                </button>

                <button
                  className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                  onClick={() => setPlaceholderValue("30 Days")}>
                  30 Days
                </button>

                <button
                  className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                  onClick={() => setPlaceholderValue("7 Days")}>
                  7 Days
                </button>

                <button
                  className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                  onClick={() => setPlaceholderValue("Custom Date")}>
                  Custom Date
                </button>

                {/* <Text size="sm" classNames={{}}>12 Months</Text> */}
                {/* <div className="bg-[#262830] px-2 py-12">
                      <button className="p-[6px] bg-[#3B3D47] rounded text-[8px]">
                        12 Months
                      </button>
                    </div> */}
              </Popover.Dropdown>
            </Popover>
          </figure>
        </article>
      </section>
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
                key={item.name}
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
                  {item.status === true ? (
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
