import React from "react";
import styles from "./LogIn.module.css";
import Image from "next/image";
import logo from "../assets/amazon_logo.png";

const LogIn = () => {
  return (
    <div className={styles.login}>
      <div className={styles.mainContainer}>
        <Image src={logo} alt="Logo" className={styles.logoImg} />
        <div className={styles.loginWrapper}>
          <div className={styles.title}>Log In</div>

          <div className={styles.inputWrapper}>
            <div className={styles.inputField}>
              <div className={styles.labelText}>Email</div>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className={styles.inputField}>
              <div className={styles.labelText}>Password</div>
              <input type="password" placeholder="Enter your passweord" />
            </div>
          </div>

          <button className={styles.loginBtn}>Login</button>

          <div className={styles.info}>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice
          </div>
        </div>
        <button className={styles.registerBtn}>Create Account in Amazon</button>
      </div>
    </div>
  );
};

export default LogIn;
