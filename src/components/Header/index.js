import React from 'react'
import styles from './styles.module.css'
import { Drawer } from '@mui/material'
import AnchorTemporaryDrawer from './drawer'
import Button from '../Button'
import {NavLink} from 'react-router-dom'

function Header() {
  return (


      <nav>
              <NavLink to='/' className={styles.navLinkCustomStyle}><div >CryptoTracker<span>.</span></div></NavLink>
              <ul>
              <NavLink className={styles.rt}><li>Theme</li></NavLink>
              <NavLink className={styles.rt} to='/'><li>Home</li></NavLink>
              <NavLink className={styles.rt} to='compare'><li>Compare</li></NavLink>
              <NavLink className={styles.rt} to='dashboard'> 
              <li><Button classname='btn-nrml' textContent='Dashboard'/></li></NavLink>
              </ul>
              <div className={styles.drawer}><AnchorTemporaryDrawer/></div>
              
      </nav>



    
  )
}

export default Header                       