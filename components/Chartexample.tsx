
'use client'
import React from 'react';
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// React Chart Component
const ChartExample = ({productDetails}:any) => {
  const { timegraph } = productDetails;

  // Define the chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Land Value',
        
      },

    },
  };

  // Define the chart data
  const chartdata = {
    labels: timegraph.map((time:{
      lat:string;
      lng:string;
    }) => time.lat), // Assuming 'lat' is a property in timegraph for labels
    datasets: [
      {
        label: 'Values', // Change this label as per your data context
        data: timegraph.map((time:{
          lat:string;
          lng:string;

        }) => time.lng), // Assuming 'lng' is a property in timegraph for data
        borderColor: '#E94908',
        backgroundColor: 'rgba(233, 73, 8, 0.2)', // Adding background color for better visibility
        fill: true,
      },
    ],
  };

  return (
    <div>

      <Line options={options} data={chartdata} />
    </div>
  );
};

// Render component inside root element
export default ChartExample;