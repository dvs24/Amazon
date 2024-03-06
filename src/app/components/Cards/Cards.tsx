import React, { useEffect } from "react";
import styles from "./Cards.module.css";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItemToList } from "../../redux/slices/homePageSlice.js";

const Cards = () => {
  const dispatch = useDispatch();
  const data = [
    {
      img: card1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
    {
      img: card5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
    {
      img: card3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
    {
      img: card2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "2200",
    },
    {
      img: card4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
    {
      img: card1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "6700",
    },
    {
      img: card5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
    {
      img: card3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
    {
      img: card1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
    {
      img: card3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
    {
      img: card5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
    {
      img: card2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      price: "3200",
    },
  ];

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
        {data.map((card, index) => (
          <div className={styles.card} key={index}>
            <Image src={card.img} alt="CardImage" className={styles.cardImg} />
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
