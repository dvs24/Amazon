"use client";
import React, { useEffect } from 'react'
import styles from './HomePage.module.css';
import img1 from '../assets/banner.jpg'
import Image from 'next/image';
import Cards from '../cards/Cards';
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/slices/homePageSlice';

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  },[])

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