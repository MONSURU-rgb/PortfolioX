import React from "react";
import { BmsTable } from "./bms";
import { HTMLProps, useEffect, useRef } from "react";
import { useCustomTable } from "./useCustomTable";
import { ColumnDef } from "@tanstack/react-table";
import { IndeterminateCheckbox } from "./checkBox";
import { MdMoreVert } from "react-icons/md";

export interface TableDataProps {
  id: number;
  industry_name: string;
  industry_description: string;
}

export default function IndustryTable({
  industryList,
}: {
  industryList: TableDataProps[];
}) {
  const { table } = useCustomTable({
    tableData: industryList,
    columns: tableColumn,
  });

  return (
    <div className="p-30 bg-white rounded-[15px] h-full w-full">
      <BmsTable table={table} />
    </div>
  );
}

const tableColumn: ColumnDef<TableDataProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  {
    accessorKey: "id",
    header: "Staff's Id",
    cell: (info: { getValue: () => any }) => info.getValue(),
  },
  {
    accessorKey: "industry_name",
    header: "Industry Name",
    cell: (info: { getValue: () => any }) => info.getValue(),
  },
  {
    accessorKey: "industry_description",
    header: "Industry Description",
    cell: (info: { getValue: () => any }) => info.getValue(),
  },
  {
    accessorKey: "is_active",
    header: "Staff's Status",
    cell: (info) =>
      info.getValue() ? (
        <span className="text-green-400">Active</span>
      ) : (
        <span className="text-red-500">Inactive</span>
      ),
  },
  {
    id: "action",
    header: "Action",
    cell: () => <MdMoreVert className="cursor-pointer rotate-90" />,
  },
];
