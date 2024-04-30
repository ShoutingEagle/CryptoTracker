import React from 'react'
import styles from './styles.module.css'

function Button({classname,textContent}) {
  return (
    <div className={styles[classname]}>{textContent}</div>
  )
}

export default Button