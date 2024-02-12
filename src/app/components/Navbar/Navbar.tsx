import React from 'react'
import styles from './Navbar.module.css';
import Image from 'next/image'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className={styles.navBar}>
        <div className={styles.logoImg}>
        <Image src={logo} width={100} height = {30}/>
        </div>

        <div className={styles.deliveryOption}>
            <div className={styles.deliveryText}>
                Delivery
            </div>
            <div className={styles.country}>
                India
            </div>
        </div>
    </div>
  )
}

export default Navbar