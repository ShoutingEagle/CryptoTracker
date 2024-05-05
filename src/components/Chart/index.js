import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS, Interaction, plugins} from 'chart.js/auto'

function Chart({chartData,multiAxis,toggleState}) {
  const options = {
    plugins : {
        legend : {
            display : multiAxis ? true : false
        },
    },
    responsive : true,
    interaction : {
        mode : 'index',
        intersect : 'false',
    },
    // scales: {
      // coinId1:{
      //   type : 'linear',
      //   display : true,
      //   position : 'left',
      // },
      // coinId2:{
      //     type : 'linear',
      //     display : true,
      //     position : 'right',       
      // }
    // }
  };





  return (
    <Line data={chartData} options={options}/>
  )
}

export default Chart








