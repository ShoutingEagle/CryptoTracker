import React from 'react'
import styles from './styles.module.css'

function ErrorPage({data}) {
  return (
    <div className={styles.errorpage}>
        <p>{data}</p>
    </div>
  )
}

export default ErrorPage