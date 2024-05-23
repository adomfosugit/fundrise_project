'use client'
import React from 'react';
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement, Title,Tooltip,Legend } from 'chart.js'
ChartJS.register(
  CategoryScale,LinearScale, PointElement,LineElement, Title,Tooltip,Legend
)

// React Chart Component
const ChartExample = () => {
 const options = {

 }
 const chartdata = {
  labels:[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
  
  ],
 
 datasets:[
  {
    label:'Months',
    data:[1000,2000,1500,2000,5000,2500,3000,2400,1400,2000],
    borderColor:'#E94908'
  }
 ]
 }
return(
  <Line options={options}  data={chartdata}  />
)
}
// Render component inside root element
export default ChartExample