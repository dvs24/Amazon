import React from 'react'
import styles from './HomePage.module.css';
import img1 from '../../assets/banner.jpg'
import Image from 'next/image';

import Cards from '../Cards/Cards';

const HomePage = () => {


  return (
    <div className={styles.homePage}>
      <Image src={img1} alt="Banner" className={styles.bannerImg}/>

      <div className={styles.cardsContainer}>
        <Cards/>
      </div>
    </div>
  )
}

export default HomePage