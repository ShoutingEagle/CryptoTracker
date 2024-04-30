import React from 'react'
import styles from './styles.module.css'
import { CircularProgress } from '@mui/material'

function Loader() {
  return (
    <div className={styles.loader}>
        <CircularProgress/>
    </div>
  )
}

export default Loader