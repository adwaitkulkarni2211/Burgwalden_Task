import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./BarChart.css";

const yPoints = [10, 13.5, 17, 20.5, 24];
const data = {
  labels: ["Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 15", "Apr 16", "Apr 16", ""],
  datasets: [
    {
      label: "",
      data: [18, 18, 20, 20, 17.5, 17.5, 22, 22, 20, 20, 18, 18, 20, 20, 22],
      backgroundColor: "#01D9D9",
      borderColor: "#01D9D9",
      borderWidth: 2.5,
      tension: 0.2,
      pointRadius: 0,
    },
  ],
};

const options = {
  scales: {
    x: {
      borderWidth: 0,
      grid: {
        display: false,
      },
      ticks: {
        callback: (value, index, values) => {
          if(index === 1 || index === 4 || index === 7 || index === 10 || index === 13) {
            return data.labels[index]
          }
        }
      }
    },
    y: {
      grid: {
        drawTicks: false,
        borderWidth: 0,
        borderDash: [5, 5]
      },
      min: 10,
      max: 24,
      ticks: {
        count: 5,
        stepSize: 3.5,
        callback: (value, index, values) => {
          return "$" + value;
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function LineChart() {
  const chartRef = useRef();
  console.dir(chartRef);

  useEffect(() => {
    const gradientBg = chartRef.current.ctx.createLinearGradient(0, 0, 0, 200);
    console.log("GRADIENT:", gradientBg);
    gradientBg.addColorStop(0, "#01D9D9");
    gradientBg.addColorStop(0.5, "white");
  }, []);

  return (
    <div id="container">
      <div id="chart-container">
        <div id="heading">
          <span className="bold-text">Sales This Months</span>
          <span className="small-text">Users from all channels</span>
        </div>
        <div id="title">
          <div id="main-title">
            <span className="small-text">$</span>
            <span className="large-text">14094</span>
          </div>
          <div id="sub-title" className="small-text">
            Another $48,346 to Goal
          </div>
        </div>
        <div id="chart">
          <Line ref={chartRef} data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default LineChart;
