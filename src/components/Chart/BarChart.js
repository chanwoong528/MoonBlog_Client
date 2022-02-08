import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {


    const data = {
        labels: ["Javascript/NodeJS", "ReactJS", "ExpressJS", "SQL(Oracle)", "MongoDB", "CSS", "SCSS"],
        datasets: [{
            label: "Skills Used for Project",
            backgroundColor: ["#de6b4f", "#de6b4f", "#de6b4f", "#0088b6", "#0088b6", "#9d7bf7", "#9d7bf7"],
            borderColor: "#fff",
            borderWidth: 2,
            data: [35, 70, 70, 40, 40, 70, 30],

        }]

    }
    const options = {
        maintainAspectRation: false,
        plugins: {
            tooltip: {
                callbacks: {
                    labelColor: function (context) {
                        return {
                            borderColor: 'rgb(0, 0, 255)',
                            backgroundColor: 'rgb(255, 0, 0)',
                            borderWidth: 2,
                            borderDash: [2, 2],
                            borderRadius: 2,
                        };
                    },
                    labelTextColor: function (context) {
                        return '#543453';
                    }
                }
            }
        },
        scales: {
            yAxes: {
                min: 0,
                max: 100,
                grid: {
                    drawBorder: true,
                    color: 'gray',

                },
                ticks: {
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,
                }
            },
            xAxes: {
                grid: {
                    drawBorder: true,
                    color: 'gray',
                },
                ticks: {
                    beginAtZero: true,
                    color: 'white',
                    fontSize: 12,

                }
            },
        },

    }
    return <div>
        <Bar data={data} height={400} width={600} options={options} />
    </div>;
}
export default BarChart; 