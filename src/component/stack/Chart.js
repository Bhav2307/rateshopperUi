import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const StackedBarChart = () => {
  const barChartData = {
    labels: [
      'Day 1',
      'Day 2',
      'Day 3',
      'Day 4',
      'Day 5',
      'Day 6',
      'Day 7',
    ],
    datasets: [
      {
        label: 'Bar 1',
        data: [-50, 10, 20, 30, 40, 50, 20], // Start at -50%
        backgroundColor: '#ED9543',
      },
      {
        label: 'Bar 2',
        data: [-15, 20, -10, 40, -30, 60, -30], // Start at -50%
        backgroundColor: '#43ED9B',
      },
      {
        label: 'Bar 3',
        data: [50, 30, -5, 20, -10, 40, -10], // Start at -50%
        backgroundColor: '#F52E5E',
      },
      {
        label: 'Bar 4',
        data: [-30, 40, -15, 10, -20, 30, -15], // Start at -50%
        backgroundColor: '#5956FF',
      },
      {
        label: 'Bar 5',
        data: [-10, 50, -25, 0, -30, 20, -5], // Start at -50%
        backgroundColor: '#56B8FF',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 10,
          maxRotation: 0,
          minRotation: 0,
          stepSize: 10,
          callback: function (value) {
            // Convert numeric value to a percentage string
            return value + '%';
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      bar: {
        borderRadius: 10, // Adjust the radius as needed
      },
    },
  };

  return <Bar data={barChartData} options={options} />;
};

export default StackedBarChart;
