import { Button, Pagination, Select } from "@mantine/core";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import React, { useMemo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const CustomTablePagination = ({
  pageSize,
  pageNumber,
  totalItems,
  nextHandler,
  prevHandler,
  pageSizeHandler,
  onPageNumberClick,
}: {
  totalItems: string | number;
  pageSize: number;
  pageNumber: number;
  nextHandler: () => void;
  prevHandler: () => void;
  pageSizeHandler: (num: string) => void;
  onPageNumberClick: (num: number) => void;
}) => {
  const totalPage = useMemo(
    () => (totalItems ? Math.ceil(Number(totalItems) / pageSize) : 0),
    [totalItems]
  );

  const handlePagination = ({
    action,
    number,
  }: {
    action?: "prev" | "next";
    number?: any;
  }) => {
    if (action === "next") {
      nextHandler();
    } else if (action === "prev") {
      prevHandler();
    } else if (number) {
      onPageNumberClick(number);
    }
  };

  return (
    <div className="flex justify-between items-center py-4 gap-2">
      <div className=" text-mapx-eneutral-7 text-sm font-normal  leading-[22.4px]">
        {(pageNumber - 1) * pageSize + 1} - {pageSize * pageNumber} of{" "}
        {totalItems} items
      </div>
      <div className="flex items-center gap-2">
        <Button
          className="border border-[#DBD9D9] w-8 h-8 text-center rounded p-1"
          onClick={() => handlePagination({ action: "prev" })}
          disabled={pageNumber < 2}>
          <FiChevronLeft
            size={16}
            className={pageNumber < 2 ? "opacity-40" : ""}
            color="#4A4C58"
          />
        </Button>
        <Pagination
          className="justify-center"
          withControls={false}
          styles={(theme) => ({
            control: {
              borderRadius: "8px",
              color: "#000",
              fontWeight: 500,
              fontSize: "14px",
              border: "none",
              "&[data-active]": {
                background: "#BF2018",
                border: "8px",
                color: "white",
              },
              "&:not([data-disabled]):hover": {
                background: "transparent",
              },
              "&[data-active]:not([data-disabled]):hover": {
                background: "#1C2433 !important",
              },
            },
          })}
          value={pageNumber}
          onChange={(val) => handlePagination({ number: val })}
          total={totalPage}
        />
        <Button
          className="border border-[#DBD9D9] text-center w-8 h-8 rounded p-1"
          onClick={() => handlePagination({ action: "next" })}
          disabled={pageNumber >= totalPage}>
          <FiChevronRight
            className={pageNumber >= totalPage ? "opacity-40" : ""}
            size={16}
            color="#4A4C58"
          />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-mapx-eneutral-7 text-sm font-normal  leading-[22.4px]">
          Show
        </p>
        <Select
          classNames={{
            rightSection: "w-auto",
            input:
              "text-mapx-ared-7 bg-transparent w-[100px] border-none pr-0 text-base font-medium leading-6",
          }}
          data={[
            { label: "10 rows", value: "10" },
            { label: "20 rows", value: "20" },
            { label: "30 rows", value: "30" },
            { label: "40 rows", value: "40" },
            { label: "50 rows", value: "50" },
          ]}
          value={String(pageSize)}
          onChange={(value) => {
            pageSizeHandler(value as string);
          }}
        />
      </div>
    </div>
  );
};
