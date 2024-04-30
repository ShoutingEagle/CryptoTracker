import React,{useEffect, useState} from 'react'
import styles from './styles.module.css'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { color } from 'framer-motion';
import { Link } from 'react-router-dom';





function Grid({coins}) {
  
    return (
      <div className={styles.grid_card}>
          {coins.map((item) => (
              <Link key={item.id} to={`/dashboard/${item.id}`} className={styles.grid_card_link}>
                  <div className={styles.grid_card_ctr}>
                      <div className={styles.box_1}>
                          <img src={item.image} alt={item.name}/>
                          <div>
                              <div className={styles.name_bold}>{item.symbol.toUpperCase()}-USD</div>
                              <div className={styles.nm}>{item.name}</div>
                          </div>
                      </div>
                      
                      <div className={styles.box_3}>
                          <span className={`${styles.box_3_1} ${item.price_change_percentage_24h < 0 ? styles.down_trend : styles.up_trend}`}>
                              {item.price_change_percentage_24h.toFixed(2)} %
                          </span>
                          <span className={`${styles.box_3_2} ${item.price_change_percentage_24h < 0 ? styles.down_trend : styles.up_trend}`}>
                              {item.price_change_percentage_24h < 0 ? (<TrendingDownIcon/>) : (<TrendingUpIcon/>)}
                          </span>
                      </div>
                      <div className={item.price_change_percentage_24h < 0 ? `${styles.box_4} ${styles.down_trend_price}` : `${styles.box_4} ${styles.up_trend_price}`}>$ {item.current_price}</div>
                      <div className={styles.box_5}><b>Total Volume : </b> $ {item.total_volume}</div>
                      <div className={styles.box_6}><b>Market Cap : </b>$ {item.market_cap}</div>
                  </div>
              </Link>
          ))}
      </div>
    );
  }
  
  export default Grid;
  