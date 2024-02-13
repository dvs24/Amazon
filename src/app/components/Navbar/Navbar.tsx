import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cartIcon.png";

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.logoImg}>
        <Image src={logo} width={100} height={60} />
      </div>

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
          <Image src={cart} width={30} height={20} />
        <div className={styles.cartText}>cart</div>
      </div>
    </div>
  );
};

export default Navbar;
