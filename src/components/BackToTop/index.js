import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from './styles.module.css';

function BackToTop() {
  const [scrollPosition,setScrollPosition] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY>50){
        setScrollPosition(true)
      }
      else{
        setScrollPosition(false)
      }
    }

    window.addEventListener('scroll',handleScroll)


    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])


  const scrollUp = () => {
    window.scrollTo({
      top : 0,
      behaviour : 'smooth'
    })
  }

  return (
    <div>
      {scrollPosition && (
      <button
      className={scrollPosition?styles.goTop:styles.goTopHidden}
      onClick={scrollUp}
      >
        <ArrowUpwardIcon/>
      </button>)
      }
    </div>
    
  );
}

export default BackToTop;



