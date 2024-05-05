import React,{useEffect, useState} from 'react'
import styles from './styles.module.css'
import LabTabs from './LabTabs.js'
import axios from 'axios';
import Loader from '../Loader/index.js';
import BackToTop from '../BackToTop/index.js';
import { fetchedCryptoData } from '../../functions/fetchCryptoData.js';
import  ErrorPage  from '../ErrorPage';



function Dashboard() {
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState([])
  console.log(data)



  useEffect(() => {
    getData()
  },[])

  async function getData () {
    const coinData = await fetchedCryptoData()
    if(coinData.length>0){
      setData(coinData)
      setLoading(false)
    }
    
  }
  

  return (
    <div className={styles.dashboard}>
      {
        loading?(<Loader/>):(
        data.length>0 ? (<>
        <input type='text' placeholder='Search'/>
        <LabTabs coinsList={data}/>
        <BackToTop/>
        </>) : (<ErrorPage data={data}/>)
        
        )
      }
      
      
      
    </div>
  )
}


export default Dashboard




