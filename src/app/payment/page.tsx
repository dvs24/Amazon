import React from "react";
import styles from "./payment.module.css";

const page = () => {
  return (
    <div className={styles.paymentPage}>
      <div className={styles.pageContainer}>
        <div className={styles.addressSection}>
          <div className={styles.pageTitle}>Review Your Order</div>
          <div className={styles.fullName}>Divyesh Prajapati</div>
          <div>101, vastral</div>
          <div>Vastral</div>
          <div>Ahmedabad, Gujarat</div>
        </div>
      </div>

      <div className={styles.paymentSection}>
        <div className={styles.cardDetails}>Card Details</div>
        <div className={styles.cardInfo}>
            <div className={styles.cardNum}>
                Card Number
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
