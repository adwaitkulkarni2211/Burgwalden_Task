import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./BarChart.css";

function BarChart() {
  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [2, 5, 4, 3, 4.5, 3.5],
        backgroundColor: ["#8757ED"],
        borderWidth: 0,
        barThickness: 20,
        borderRadius: { topLeft: 20, topRight: 20 },
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div id="container">
      <div id="chart-container">
        <div id="title">
          <div id="main-title">
            <span className="small-text">$</span>
            <span className="large-text">2,420</span>
            <span className="fancy-text">^2.6%</span>
          </div>
          <div id="sub-title" className="small-text">
            Average Daily Sales
          </div>
        </div>
        <div id="chart">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default BarChart;
