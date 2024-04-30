import React from 'react'
import styles from './styles.module.css'

function CoinDetail({coins}) {

  return (
    <div className={styles.coin_details}>
      <span className={styles.name}>{coins.name}</span>
      <p 
      className={styles.coin_details_text}
      dangerouslySetInnerHTML={{__html:coins.description}}
      />

    </div>
  )
}

export default CoinDetail