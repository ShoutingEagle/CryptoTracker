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
import Dropdown from '../Dropdown/index.js'
import Toggle from '../Toggle/index.js'
import {setChartData} from '../../functions/setChartData.js'


function Details() {
  const {id} = useParams()
  const [isLoading,setIsLoading] = useState(true)
  const [coinDetails,setCoinDetails] = useState()
  const [days,setDays] = useState(30)
  const [chartDataState,setChartDataState] = useState({})
  const [toggleState, setToggleState] = useState('prices')
  const [isLoadingGraph,setIsLoadingGraph] = useState(true) 

  useEffect(() => {
    if(id) {
      fetchData()
    }
  },[id])

  async function fetchData() {
    const singleCoinData = await fetchedSingleCoinData(id)
    if(singleCoinData){
      filterFetchedData(setCoinDetails,singleCoinData)
      setIsLoading(false)
    }
  }


  useEffect(() => {
    fetchGraphDataForChart();
  },[days,toggleState])


  async function fetchGraphDataForChart () {
    const graphData = await fetchedGraphData(id,days,toggleState)
      if(graphData.length>0){
          setChartData(setChartDataState,graphData,false,id,false)
          setIsLoadingGraph(false)
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
              <Toggle state={toggleState} setState={setToggleState}/>
            </span>
            {isLoadingGraph?<Loader/>:<Chart chartData={chartDataState} multiAxis={false}/>}
          </div>
          
          <CoinDetail coins={coinDetails} multiaxis/>
      </div>
      }

    </div>
  )
}

export default Details













