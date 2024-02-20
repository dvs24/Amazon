import React from 'react'
import Banner from '../Banner/Banner'
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Banner/>
    </div>
  )
}

export default HomePage