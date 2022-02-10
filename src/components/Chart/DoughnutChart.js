import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart() {
  const data = {
    labels: ["Front End(React)", "Back End(Express)", "DB"],
    datasets: [
      {
        label: "Skills Used for Project",
        backgroundColor: ["#de6b4f", "#0088b6", "#9d7bf7"],
        color: "#fff",
        borderColor: "#fff",
        borderWidth: 2,
        data: [2, 2, 1],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRation: false,
    legend: {
      label: {
        fontColor: "white",
      },
    },
  };
  return <Doughnut data={data} options={options} />;
}
