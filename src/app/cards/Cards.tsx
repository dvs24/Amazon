import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToList } from "../redux/slices/homePageSlice.js";

const Cards = () => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.homePage.productsData)

  const handleAddCartItem = (card) => {
    const itemData = {
      img : card.img,
      title : card.title,
      price : card.price
    }
      
    dispatch(addItemToList(itemData));
  };
  return (
    <div className={styles.cards}>
      <>
        {productsData?.map((card, index) => (
          <div className={styles.card} key={index}>
            <img src={card.imageUrl} alt="CardImage" className={styles.cardImg} />
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.price}>₹{card.price}</div>
            <button
              className={styles.cardbtn}
              onClick={() => handleAddCartItem(card)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </>
    </div>
  );
};

export default Cards;
