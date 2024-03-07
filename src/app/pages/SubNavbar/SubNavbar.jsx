import React from 'react'
import styles from './SubNavbar.module.css';
import menu from '../../assets/menu.svg'
import Image from "next/image";


const SubNavbar = () => {
  return (
    <div className={styles.subNavbar}>
        <Image src={menu} width={25} height = {25} alt='' />
        <button className={styles.subNavbarBtn}>
            All
        </button>
        <button className={styles.subNavbarBtn}>
            Today's Deals
        </button>
        <button className={styles.subNavbarBtn}>
            Customer Service
        </button>
        <button className={styles.subNavbarBtn}>
            Registry
        </button>
        <button className={styles.subNavbarBtn}>
            Gift Cards
        </button>
        <button className={styles.subNavbarBtn}>
            Sell
        </button>
    </div>
  )
}

export default SubNavbar