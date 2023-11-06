import React from 'react';
import { Chart } from 'react-google-charts';
const aspectRatio = 1 / 4;

const FluctuationChart = () => {
  const data = [
    ['Day', 'Low', 'Opening value', 'Closing value', 'High'],
    ['Mon', 28, 28, 45, 45],
    ['Tue', 38, 38, 55, 55],
    ['Wed', 55, 55, 77, 77],
    ['Thu', 77, 77, 66, 66],
    ['Fri', 68, 68, 15, 15],
    ['Sat', 90, 90, 70, 70],
    ['Sun', 60, 60, 30, 30]
  ];

  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        legend: 'none',
        bar: { groupWidth: '100%' }, // Remove space between bars.
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
          risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
        },
        vAxis: {
          gridlines: {
            color: 'lightgray', // Set the color of the gridlines
          },
        },
      }}
    />
  );
};

export default FluctuationChart;
