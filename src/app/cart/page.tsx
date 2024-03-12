"use client";
import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  // Check if window is defined (client-side) before using useSelector
  const [allItemPrice, setAllItemPrice] = useState(0);
  const itemList =
    typeof window !== "undefined"
      ? useSelector((state) => state.homePage.itemList)
      : [];

  useEffect(() => {
    if (itemList.length > 0) {
      let totalPrices = 0;
      itemList.forEach((item) => {
        totalPrices += parseFloat(item.price);
      });

      setAllItemPrice(totalPrices);
    }
  }, [itemList]);

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <div className={styles.cartTitle}>Shopping Cart</div>
        {itemList.length <= 0 ? (
          <>
            <div style={{ fontSize: "2rem" }}>No item selected</div>
            <button className={styles.itemBtn}>Browse Items</button>
          </>
        ) : (
          <div className={styles.itemMain}>
            {itemList.map((item, index) => (
              <div className={styles.itemContainer} key={index}>
                <Image
                  src={item.img}
                  alt="item"
                  width={350}
                  height={250}
                  className={styles.itemImg}
                />
                <div className={styles.infoContainer}>
                  <div className={styles.itemInfo}>{item.title}</div>
                  <div className={styles.itemPrice}>₹ {item.price}</div>
                  <button className={styles.removeBtn}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.allItmeInfo}>
        <div className={styles.allItmeInfoWrapper}>
          Subtotal ({itemList.length} Items) : ₹ {allItemPrice}
          <Link href="/checkout">
            <button className={styles.checkoutBtn}>Proceed to checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
