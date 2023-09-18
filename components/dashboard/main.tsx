import React, { useEffect, useState } from "react";
import { NavBarCommon } from "..";

import Donut, { PieList } from "../common/mantinedonut";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Rectangle,
} from "recharts";
// import Donut from "./apex-donut";
import DownArrow from "@/public/down-arrow";
import CustomersListTable from "./customers-list-table";
import { clsx } from "@mantine/core";
// import Example from "./table";
// import { DemoPie } from "./Doughnut";

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

const data = [
  {
    name: "Trading",
    uv: 1000,
    color: "#FF9E2C",
  },
  {
    name: "Civil Service",
    uv: 1300,
    color: "#000000",
  },
  {
    name: "Health & Aid",
    uv: 800,
    color: "#ED3A3A",
  },
  {
    name: "IT",
    uv: 1000,
    color: "#C3FF44",
  },
  {
    name: "Civil Service",
    uv: 1300,
    color: "#FF805D",
  },
  {
    name: "Agriculture",
    uv: 500,
    color: "#56C456",
  },
];

export interface TextWithDownArrowIconProps {
  text: string;
  color: string;
  bg: string;
}

const CustomBar = (props: any) => {
  const { x, y, width, height, color } = props;
  const topLeftRadius = 10;
  const topRightRadius = 10;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        rx={`${topLeftRadius}`} // Set separate radius for top left and top right corners
        ry="0"
      />
    </g>
  );
};

export const RenderBarChart = () => {
  const [size, setSize] = useState(40);
  useEffect(() => {
    window.innerWidth <= 800 ? setSize(20) : setSize(40);
  }, []);

  return (
    <ResponsiveContainer width="93%" height={250}>
      <BarChart width={630} data={data} height={250}>
        <XAxis dataKey="name" stroke="#5F6868" />
        <YAxis dataKey="uv" />
        <Tooltip />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          barSize={size}
          shape={<CustomBar />}
          // radius={[25, 25, 0, 0]}
          // Use the custom shape function
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

function BarChart1() {
  return (
    <>
      <section className="px-30 pb-24 pt-32 bg-white flex flex-col gap-51 w-7/12 rounded-[14px] max-[1120px]:w-full">
        <article className="flex justify-between items-center">
          <h2 className="text-[var(--arsenic)] text-18 font-medium">Clients</h2>
          <h3 className="text-[var(--grey)] text-12">
            Number of clients by industry
          </h3>
        </article>
        <article>
          <RenderBarChart />
        </article>
      </section>

      <section className="bg-white pl-51 pt-34 rounded-[14px] w-5/12 pr-40 max-[1120px]:!w-full">
        {" "}
        <SecondChart text="Top Clients By Sector" size={250} />
      </section>
    </>
  );
}

export function SecondChart({ text, size }: { text: string; size: number }) {
  return (
    <div className="flex-grow">
      <article className="flex justify-between items-center pb-24 overflow-x-auto w-full flex-grow max-[1120px]:!w-full">
        <h2 className="text-[var(--arsenic)] text-16 font-medium">{text}</h2>
        <TextWithDownArrowIcon text="Volume" color="#000" bg="#F8F5FF" />
      </article>
      <article className="flex flex-wrap justify-center">
        <Donut size={size} />
        <PieList />
      </article>
    </div>
  );
}

export function Main() {
  return (
    <main className="ml-260 !w-full bg-[#F8F5FF] max-[768px]:!ml-0">
      <NavBarCommon />
      <section className="p-30 flex gap-30 !overflow-x-auto max-[1120px]:flex-col">
        <BarChart1 />
        {/* <SecondChart /> */}
      </section>{" "}
      <article className="flex-grow">
        <CustomersListTable />
      </article>
    </main>
  );
}

export function TextWithDownArrowIcon({
  text,
  color,
  bg,
}: TextWithDownArrowIconProps) {
  return (
    <button
      className={clsx(
        "text-12 flex rounded-[10px]",
        "p-2 gap-1 items-center",
        `text-[${color}]`,
        `bg-[${bg}]`
      )}>
      <span className={clsx("text-12", `text-[${color}]`)}>{text}</span>
      <DownArrow color={color} />
    </button>
  );
}
