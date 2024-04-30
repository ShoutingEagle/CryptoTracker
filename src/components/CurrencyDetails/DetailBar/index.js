import React from 'react'
import styles from './styles.module.css'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
           
function DetailBar({coins}) {

  


  return (
    <div className={styles.detail_bar}>
        <div className={styles.name_symbol}>
            <span><img  src={coins.image} alt='img'/></span>
            <span>
                <div className={styles.name_bold}>
                    {coins.symbol.toUpperCase()}-USD
                </div>
                <div>{coins.name}</div>               
            </span>
        </div>
        <div className={styles.trend}>
            <span className={coins.price_change_percentage_24h<0?`${styles.down_trend}`:`${styles.up_trend}`}>
                {coins.price_change_percentage_24h.toFixed(2)}
            </span>
            <span className={coins.price_change_percentage_24h<0?`${styles.trend_icn} ${styles.down_trend}`:`${styles.trend_icn} ${styles.up_trend}`}>
                {coins.price_change_percentage_24h<0?(<TrendingDownIcon/>):(<TrendingUpIcon/>)} 
            </span>
        </div>
        <div className={coins.price_change_percentage_24h<0?`${styles.current_price} ${styles.down_trend_price}`:`${styles.current_price} ${styles.up_trend_price}`}>
            $ {coins.current_price}
        </div>
        <div>$ {coins.total_volume}</div>
        <div>$ {coins.market_cap}</div>
    </div>
  )
}

export default DetailBar

