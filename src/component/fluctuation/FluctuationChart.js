import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const FluctuationChart = () => {
  const barChartData = {
    labels: [
      'Date',
      'Date',
      'Date',
      'Date',
      'Date',
      'Date',
      'Date',
    
      
    ],
    datasets: [
      {
        label: 'Bar 1',
        data: [-50, 10, 20, 30, 40, 50, 20], // Start at -50%
        backgroundColor: '#43ED9B',
      },
      {
        label: 'Bar 2',
        data: [-15, 20, -10, 40, -30, 60, -30], // Start at -50%
        backgroundColor: '#ED9543',
      },
  
    ],
  };

  const options = {
    aspectRatio: 4/1,

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

export default FluctuationChart;
