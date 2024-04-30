import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'
import axios from 'axios'
import styles from './styles.module.css'
import DetailBar from '../CurrencyDetails/DetailBar'
import CoinDetail from '../CurrencyDetails/CoinDetail'
import { filterFetchedData } from '../../functions/filterData'
import { fetchedSingleCoinData } from '../../functions/fetchingSingleCoinData'
import { fetchedGraphData } from '../../functions/fetchingDataForGraph'
import Chart from '../Chart'
import {extractData} from '../../functions/extractDatefromObject.js'
import Dropdown from '../Dropdown/index.js'
import Toggle from '../Toggle/index.js'


function Details() {
  const {id} = useParams()
  const [isLoading,setIsLoading] = useState(true)
  const [coinDetails,setCoinDetails] = useState()
  const [days,setDays] = useState(30)
  const [chartData,setChartData] = useState({})
  const [toggle, setToggle] = useState('prices');

  useEffect(() => {
    if(id) {
      fetchData()
    }
  },[id,days,toggle])

  async function fetchData() {
    const singleCoinData = await fetchedSingleCoinData(id)
    if(singleCoinData){
      filterFetchedData(setCoinDetails,singleCoinData)
      const graphData = await fetchedGraphData(id,days)
      if(graphData){
        
        setChartData({
          labels: graphData[toggle].map((item) => {
            return extractData(item[0])
          }),
          datasets: [
            {
            data: graphData[toggle].map((item) => item[1]),
            borderColor: '#3a80e9',
            borderWidth : 2,
            fill : true,
            tension : 0.25,
            backgroundColor : 'rgba(58,128,233,0.1)',
            pointRadius : 0
            },
          ],
        })
        setIsLoading(false)
      }
    }
  }

  return (
    <div>
      {isLoading?<Loader/> :
      <div className={styles.details}>
        
          <DetailBar coins={coinDetails}/>
          <div className={styles.chart}>
            <span className={styles.dropdown_cnt}>
              <span>Price Change in the last</span>
              <Dropdown state={days} setState={setDays}/>
            </span>
            <span className={styles.toggle_cnt}>
              <Toggle state={toggle} setState={setToggle}/>
            </span>
            <Chart chartData={chartData}/>
          </div>
          
          <CoinDetail coins={coinDetails}/>
      </div>
      }

    </div>
  )
}

export default Details













