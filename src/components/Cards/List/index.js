import React,{useEffect,useState} from 'react'

import styles from './styles.module.css'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Link } from 'react-router-dom';
           
function List({coins}) {

  
 


  return (
    <div className={styles.list_view}>
        {
            <table>       
                <tbody>
                    {coins.map((item) => (
                        <Link key={item.id} to={`/dashboard/${item.id}`} className={styles.grid_card_link}>
                        <tr key={item.id} className={styles.single_card}>
                            <td className={styles.name_symbol}>                               
                                    <img  src={item.image} alt='img'/>
                            </td>
                            <td>
                                <div>
                                    <div className={styles.name_bold}>{item.symbol.toUpperCase()}-USD</div>
                                    <div>{item.name}</div>
                                </div>
                             </td>
                            <td className={styles.trend}>     
                                <span className={item.price_change_percentage_24h<0?`${styles.down_trend}`:`${styles.up_trend}`}>
                                    {item.price_change_percentage_24h.toFixed(2)}
                                </span>            
                            </td>
                            <td className={item.price_change_percentage_24h<0?`${styles.trend_icn} ${styles.down_trend}`:`${styles.trend_icn} ${styles.up_trend}`}>                          
                                    {item.price_change_percentage_24h<0?(<TrendingDownIcon/>):(<TrendingUpIcon/>)}                                
                            </td>
                            <td className={item.price_change_percentage_24h<0?`${styles.current_price} ${styles.down_trend_price}`:`${styles.current_price} ${styles.up_trend_price}`}>
                                $ {item.current_price}
                                
                            </td>
                            <td className={styles.total_volume}>
                                $ {item.total_volume}
                            </td>
                            <td className={styles.market_cap}>
                                $ {item.market_cap}
                            </td>
                        </tr>
                        </Link>
                        )
                    
                    )  
                    
                    }
                </tbody>
            </table>          
        }
    </div>
  )
}

export default List




