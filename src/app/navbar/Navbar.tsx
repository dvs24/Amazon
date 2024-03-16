import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "../assets/logo.svg";
import cart from "../assets/cartIcon.png";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const itemList = useSelector((state) => state.homePage.itemList);

  const handleCartIcon = () => {};

  return (
    <div className={styles.navBar}>
      <Link href="/">
        <button className={styles.logoImg}>
          <Image src={logo} width={100} height={60} alt="" />
        </button>
      </Link>

      <div className={styles.textWrapper}>
        <div className={styles.deliveryText}>Delivery</div>
        <div className={styles.country}>India</div>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Products"
        />
        <button className={styles.searchBtn}>search</button>
      </div>

      <div className={styles.textWrapper}>
        <div className={styles.signInText}>Hello Sign in</div>
        <div className={styles.AccList}>Accounts & Lists</div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.markedText}>Marked</div>
        <div className={styles.favouritesText}>& Favourites</div>
      </div>

      <div className={styles.cartWrapper}>
        <Link href="/cart">
          <Image src={cart} width={30} height={20} alt="" />
          <div className={styles.cartText}>cart</div>
        </Link>
        {itemList.length > 0 && (
          <div className={styles.cartNum}>{itemList?.length}</div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
