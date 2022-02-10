import React from "react";
import {
  Chart as ChartJS,
  //   BarElement,
  //   CategoryScale,
  //   LinearScale,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
//ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
  const data = {
    labels: [
      "ReactJS",
      "ExpressJS",
      "Javascript/NodeJS",
      "SQL(Oracle)",
      "MongoDB",
      "CSS",
      "SCSS",
    ],
    datasets: [
      {
        label: "Skills Used for Project",
        backgroundColor: [
          "#de6b4f",
          "#de6b4f",
          "#de6b4f",
          "#0088b6",
          "#0088b6",
          "#9d7bf7",
          "#9d7bf7",
        ],
        color: "#fff",
        borderColor: "#fff",
        borderWidth: 2,
        data: [70, 70, 35, 40, 40, 70, 30],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRation: false,
    aspectRatio: 1,
    legend: {
      label: {
        fontColor: "white",
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          labelColor: function (context) {
            return {
              borderColor: "rgb(0, 0, 255)",
              backgroundColor:
                context.dataset.backgroundColor[context.dataIndex],
              borderWidth: 2,
              borderDash: [2, 2],
              borderRadius: 2,
            };
          },
          labelTextColor: function (context) {
            return "#fff";
          },
          label: function (context) {
            return context.label;
          },
        },
      },
    },
    scales: {
      yAxes: {
        min: 0,
        max: 100,
        grid: {
          drawBorder: true,
          color: "gray",
        },
        ticks: {
          beginAtZero: true,
          color: "white",
          fontSize: 12,
        },
      },
      xAxes: {
        grid: {
          drawBorder: true,
          color: "gray",
        },
        ticks: {
          beginAtZero: true,
          color: "white",
          fontSize: 12,
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
};
export default BarChart;
