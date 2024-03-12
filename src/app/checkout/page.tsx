"use client";
import React, { useEffect } from "react";
import styles from "./Checkout.module.css";
import { addUserInfo } from "../redux/slices/homePageSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const page = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.homePage.userInfo);

  const handleAddInfo = () => {
    const fullName = document.getElementById("fullName").value;
    const building = document.getElementById("buildingInfo").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const areaInfo = document.getElementById("areaInfo").value;
    const landMark = document.getElementById("landMark").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;

    const data = {
      fullName: fullName,
      buildingInfo: building,
      phoneNumber: phoneNumber,
      areaInfo: areaInfo,
      landMark: landMark,
      city: city,
      state: state,
    };
    dispatch(addUserInfo(data));
  };

  return (
    <div className={styles.addressPage}>
      <div className={styles.formContainer}>
        <div className={styles.pageTitle}>Fill your details</div>
        <div className={styles.formRow}>
          <div className={styles.label}>Full Name</div>
          <input className={styles.inputField} type="text" id="fullName" />
        </div>
        <div className={styles.formRow}>
          <div className={styles.label}>Phone Number</div>
          <input className={styles.inputField} type="text" id="phoneNumber" />
        </div>
        <div className={styles.formRow}>
          <div className={styles.label}>
            Flat, House no., Building, Company, Apartment
          </div>
          <input className={styles.inputField} type="text" id="buildingInfo" />
        </div>
        <div className={styles.formRow}>
          <div className={styles.label}>Area,Colony,Street,Sector,Village</div>
          <input className={styles.inputField} type="text" id="areaInfo" />
        </div>
        <div className={styles.formRow}>
          <div className={styles.label}>Landmark</div>
          <input className={styles.inputField} type="text" id="landMark" />
        </div>
        <div className={styles.formRow}>
          <div className={styles.label}>Town/City</div>
          <input className={styles.inputField} type="text" id="city" />
        </div>
        <div className={styles.formRow}>
          <div className={styles.label}>State</div>
          <input className={styles.inputField} type="text" id="state" />
        </div>
        <Link href="/payment">
          <button onClick={handleAddInfo} className={styles.pageBtn}>
            Deliever to this address
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
