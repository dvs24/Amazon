"use client";
import React from "react";
import img1 from "../../assets/sliderImg_1.jpg";
import img2 from "../../assets/sliderImg_2.jpg";
import img3 from "../../assets/sliderImg_3.jpg";
import img4 from "../../assets/sliderImg_4.jpg";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <Image src={img1} alt="Image1" />
      </div>
      <div>
        <Image src={img2} alt="Image2" />
      </div>
      <div>
        <Image src={img3} alt="Image3" />
      </div>
      <div>
        <Image src={img4} alt="Image4" />
      </div>
    </Carousel>
  );
};

export default Banner;
