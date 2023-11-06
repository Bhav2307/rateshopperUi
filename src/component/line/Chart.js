import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DoubleLineChart = () => {
  const lineChartData = {
    labels: [
      "10 Sep 23",
      "10 Sep 23",
      "10 Sep 23",
      "10 Sep 23",
      "10 Sep 23",
      "10 Sep 23",
      "10 Sep 23",
      "10 Sep 23",
      "10 Sep 23",
    
    ],
    datasets: [
      {
        id: 1,
        label: 'Line 1',
        data: [1, 5, 12, 18, 7, 26, 14, 2, 9],
        borderColor: '#C686F8',
        backgroundColor: 'transparent',
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.5,
      },
      {
        id: 2,
        label: 'Line 2',
        data: [7, 16, 9, 18, 12, 24, 8, 21, 15],
        borderColor: '#8571F4',
        backgroundColor: 'transparent',
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.5,
      },
      {
        id: 3,
        label: 'Line 3',
        data: [10, 5, 15, 12, 17, 8, 21, 14, 25], // Your data for Line 3
        borderColor: '#43ED9B', // Choose a color for Line 3
        backgroundColor: 'transparent',
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.5,
      },
    ],
  };

  const options = {
    aspect:3,
    responsive: true,
    scales: {
      x: {
        title: {
          display: false,
          text: 'Months',
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: 1, // Set step size to control the number of ticks displayed
          padding: 10, // Adjust the padding between ticks and the chart area
          maxRotation: 0, // Prevent label rotation
          minRotation: 0, // Prevent label rotation
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: false,
          text: 'Custom Labels',
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 10, // Adjust the padding between ticks and the chart area
          maxRotation: 0, // Prevent label rotation
          minRotation: 0, // Prevent label rotation
          stepSize: 10, // Set the step size to control the interval between tick values
          callback: function (value) {
            return value; // Display the tick value as is (0, 10, 20, 30, etc.)
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Display the legend for both lines
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
      interaction: {
        mode: 'index',
      },
    },
  };

  return (
   
      <Line data={lineChartData} options={options} />

  );
};

export default DoubleLineChart;
