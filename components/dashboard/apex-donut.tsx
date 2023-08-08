import React, { Component } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false }); // Load the Chart component dynamically

interface DonutState {
  options: any;
  series: number[];
  labels: string[];
}

class Donut extends Component<{}, DonutState> {
  constructor(props: {}) {
    super(props);

    this.state = {
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
                  formatter: function (value: any) {
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
    };
    this.state.options.labels = this.state.labels;
  }

  render() {
    return (
      <div className="donut">
        {typeof window !== "undefined" && ( // Check if window is defined (client side)
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="380"
          />
        )}
      </div>
    );
  }
}

export default Donut;
