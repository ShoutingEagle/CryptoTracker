import React from 'react'
import styles from './style.module.css'
import Button from '../Button'
import phone from '../../assets/phone.png'
import gradient from '../../assets/gradient.png'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'

function LandingPage() {
  return (
    <main className={styles.ldn_pg}>
        <div className={styles.content} >
            <div className={styles.prm_text}> 
              <motion.p className={styles.txt_stk}  
              initial={{opacity:0,y:50}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.15}}
              >Track Crypto</motion.p>
              <motion.p 
              initial={{opacity:0,y:50}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.5}}>Real Time.</motion.p>
            </div>
            <motion.p 
              initial={{opacity:0,y:25}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:1}}
              >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
            <motion.span 
              initial={{opacity:0,x:50}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.5,delay:1.5}}>
              <NavLink to='dashboard' className={styles.rt}><Button classname='btn-nrml' textContent='Dashboard'/></NavLink>
              <Button classname='btn-outl' textContent='Share' />
            </motion.span>
        </div>
        <div className={styles.ani_img}>
          <motion.img 
          initial={{y:-15}}
          animate={{y:15}}
          transition={{
            type:"smooth",
            repeatType:'mirror',
            duration:1.5,
            repeat:Infinity,
          }}
          src={phone} alt='img-ph'/>
          <img src={gradient} alt='img-grd'/>
        </div>
    </main>
  )
}

export default LandingPage

