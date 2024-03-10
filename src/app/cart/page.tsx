import React from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import newImg from "../assets/card2.jpg";
import Image from "next/image";

const Cart = () => {

  // const itemList = useSelector((state) => state.homePage.itemList);

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <div className={styles.cartTitle}>Shopping Cart</div>
        <div className={styles.itemContainer}>
          <Image src={newImg} alt="item" width={350} height={200} />
          <div className={styles.infoContainer}>
            <div className={styles.itemInfo}>
              Lorem ipsum, dolor sit amet consectetur
            </div>
            <div className={styles.itemPrice}>₹ 3499</div>
            <button className={styles.removeBtn}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
