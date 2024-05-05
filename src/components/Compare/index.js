import React, { useState,useEffect,Suspense } from 'react'
import SelectLabels from './SelectLabels'
import { fetchedCryptoData } from '../../functions/fetchCryptoData'
import Loader from '../Loader'
import Toggle from '../Toggle'
import Dropdown from '../Dropdown'
import styles from './styles.module.css'
import {fetchedSingleCoinData} from '../../functions/fetchingSingleCoinData.js'
import {filterFetchedData} from '../../functions/filterData.js'
import DetailBar from '../CurrencyDetails/DetailBar'
import CoinDetail from '../CurrencyDetails/CoinDetail/index.js'
import {fetchedGraphData} from '../../functions/fetchingDataForGraph.js'
import Chart from '../Chart'
import {setChartData} from '../../functions/setChartData.js'
import ErrorPage from '../ErrorPage/index.js'


function Compare() {
  const [loadingCryptoGraphData,setLoadingCryptoGraphData] = useState(true)
  const [cryptoData,setCryptoData] = useState({
    loading : true,
    coinList : [],
    error : '',
  })
  const [coinId1,setCoinId1] = useState('bitcoin')
  const [coinId2,setCoinId2] = useState('ethereum')
  const [loadingCoinDetail,setLoadingCoinDetail] = useState(true);
  const [coinDetail1,setCoinDetail1] = useState()
  const [coinDetail2,setCoinDetail2] = useState()
  const [toggle,setToggle] = useState('prices')
  const [chartDataState,setChartDataState] = useState(null)
  const [days,setDays] = useState(30)
  console.log(chartDataState);
  console.log(chartDataState instanceof Object)


  useEffect(() => {
    coinData()
  },[])

  async function coinData () {
    const data = await fetchedCryptoData()
    if (Array.isArray(data)){
      setCryptoData({
        loading : false,
        coinList : data,
        error : ''
      });
    }
    else{
      setCryptoData({
        loading : false,
        coinList : [],
        error : 'cannot fetch data please try again !'
      });
    }
  }


  useEffect(() => {
    singleCoinData()
    fetchData()
  },[coinId1,coinId2])

  async function singleCoinData () {
    const data1 = await fetchedSingleCoinData(coinId1)
    const data2 = await fetchedSingleCoinData(coinId2)
    if(coinId1 === data1.id ){
      filterFetchedData(setCoinDetail1,data1)
    }
    else{
      setCoinDetail1(data1)
    }

    if(coinId2 === data2.id ){
      filterFetchedData(setCoinDetail2,data2)
    }
    else{
      setCoinDetail2(data2)
    }

    if(data1 && data2){
      setLoadingCoinDetail(false)
    }

    
  }





  useEffect(() => {
    fetchData()
  },[days,toggle])

  

  async function fetchData() {

      const graphDataCurrency1 = await fetchedGraphData(coinId1,days,toggle)
      const graphDataCurrency2 = await fetchedGraphData(coinId2,days,toggle)
      console.log(graphDataCurrency1,graphDataCurrency2)
      if(Array.isArray(graphDataCurrency1) && Array.isArray(graphDataCurrency2)){ 
        console.log('inside if block')
        setChartData(setChartDataState,graphDataCurrency1,graphDataCurrency2,coinId1,coinId2)
        setLoadingCryptoGraphData(false)
      }
      else{
        console.log('inside else block')
        setChartDataState('Chart Data cannot be obtained');
        setLoadingCryptoGraphData(false)
      }
  }


  return (

        <div>
          
            
              <div>

              <div className={styles.selectors}>
                  {
                    cryptoData.loading?(
                      <Loader/>
                    ):(
                      cryptoData.coinList.length > 0 ? (
                      <>
                      <span>
                        <SelectLabels stateReceived={cryptoData.coinList} state={coinId1} stateToFilter={coinId2} setState={setCoinId1}/>
                      </span>
                      <span>
                        <SelectLabels stateReceived={cryptoData.coinList} state={coinId2} stateToFilter={coinId1} setState={setCoinId2}/>
                      </span>
                      <span>
                        <Dropdown state={days} setState={setDays}/>
                      </span>
                    </>):(<ErrorPage data={cryptoData.error}/>)
                  )}
              </div>
              
              
              <div className={styles.coinDetail}>
                {
                  loadingCoinDetail?(<Loader/>):(                 
                    coinDetail1 instanceof Object && coinDetail2 instanceof Object ? (
                    <>
                    <DetailBar coins={coinDetail1}/>
                    <DetailBar coins={coinDetail2}/>
                    </>) : (
                      <ErrorPage data={coinDetail1}/>
                    )                   
                  )                
                }
              </div>
              
              

              <div className={styles.chart}>
                {
                loadingCryptoGraphData ?(<Loader/>):(
                chartDataState.labels ? (
                <>
                <Toggle state={toggle} setState={setToggle}/>
                <Chart chartData={chartDataState}  multiAxis={true} toggleState={toggle}/>
                </>
                ):(
                <ErrorPage data={chartDataState}/>
                ))}
                
              </div>



              <div className={styles.coin_detail}>
              {
                  loadingCoinDetail?(<Loader/>):(                 
                    coinDetail1 instanceof Object && coinDetail2 instanceof Object ? (
                    <>
                    <CoinDetail coins={coinDetail1}/>
                    <CoinDetail coins={coinDetail2}/> 
                    </>) : (
                    <ErrorPage data={coinDetail1}/>
                    )                   
                  )                
                }
              </div>
              
              
              


              </div>
              
     
          
          
        </div> 

    
  )
}

export default Compare















