import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false }); // Load the Chart component dynamically

interface DonutState {
  options: any;
  series: number[];
  labels: string[];
}

const Donut: React.FC = () => {
  const [donutState, setDonutState] = useState<DonutState>({
    labels: ["Civil Service", "Service", "Trading", "IT"],
    options: {
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: "Top 4 Sector",
                fontSize: "14px",
                color: "#596780",
                formatter: (value: any) => {
                  return `$ ${value.globals.seriesTotals.reduce(
                    (a: any, b: any) => a + b,
                    0
                  )}`;
                },
                align: "center", // Center align the labels
                offsetX: 0, // Offset in the x-axis (adjust as needed)
                offsetY: 0,
              },
            },
          },
        },
      },
    },
    series: [40000, 19940, 10000, 19940],
  });

  useEffect(() => {
    donutState.options.labels = donutState.labels;
    setDonutState(donutState);
  }, []);

  return (
    <div className="donut">
      {typeof window !== "undefined" && (
        <Chart
          options={donutState.options}
          series={donutState.series}
          type="donut"
          width="100%"
          // height="400"
        />
      )}
    </div>
  );
};

export default Donut;
