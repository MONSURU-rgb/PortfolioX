import { DateInput } from "@mantine/dates";
import { CalendarMonth } from "../dashboard/data-icon";
import { Button, Popover } from "@mantine/core";
import { ArrowDropDown } from "../dashboard/drop-down";
import { ReactNode, useState } from "react";

export interface TableHeaderInterface {
  header: string;
  button: ReactNode | null;
}

export function TableHeader({ header, button }: TableHeaderInterface) {
  const [value, setValue] = useState<Date | null>(null);
  const [placeholderValue, setPlaceholderValue] = useState("Last Week");
  return (
    <section className="flex justify-between pb-22 items-center flex-wrap max-[580px]:overflow-x-auto">
      <h2 className="text-18 font-medium text-[#191635]">{header}</h2>
      <article className="flex gap-45">
        {button}
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
              dropdown: "!bg-[var(--icon-text-color)] !px-[8px] !py-[12px]",
            }}>
            <Popover.Target>
              <Button
                w={85}
                classNames={{
                  root: "!bg-[#f8f5ff] !px-2 !text-[12px] flex gap-22 !w-fit !items-center !justify-center text-[var(--icon-text-color)]",
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
  );
}

export function GenerateReportButton() {
  return (
    <button className="rounded-[5px] bg-[var(--violet)] px-34 py-12 text-white text-[13px] font-medium leading-none max-[725px]:hidden">
      Generate Report
    </button>
  );
}
