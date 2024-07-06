import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'rgba(0, 0, 0, 0.87)', 
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', 
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.87)', 
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', 
        },
        ticks: {
          color: 'rgba(0, 0, 0, 0.87)', 
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
