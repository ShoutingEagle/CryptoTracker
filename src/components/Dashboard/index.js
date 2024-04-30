import React,{useEffect, useState} from 'react'
import styles from './styles.module.css'
import LabTabs from './LabTabs.js'
import axios from 'axios';
import Loader from '../Loader/index.js';
import BackToTop from '../BackToTop/index.js';




function Dashboard() {
  

  const [fetchedData,setFetchedData] = useState({
    loading : true,
    data : [],
    error : ''
  });

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then((response) => setFetchedData({loading: false,data:response.data,error:''}))
    .catch((error) => setFetchedData({loading: false,data:[],error:error.message}))
  },[])
  

  return (
    <div className={styles.dashboard}>
      {
        fetchedData.loading?(<Loader/>):(
        <>
        <input type='text' placeholder='Search'/>
        <LabTabs coinsList={fetchedData.data}/>
        <BackToTop/>
        </>
        )
      }
      
      
      
    </div>
  )
}


export default Dashboard




