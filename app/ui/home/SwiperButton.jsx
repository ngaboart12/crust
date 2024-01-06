"use client";
import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex flex-row gap-2 items-center w-full justify-center py-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="h-[4px] w-[50px] bg-[#F9A21B]"
      ></button>
      <button
        onClick={() => swiper.slideNext()}
        className="h-[4px] w-[50px] bg-[#f96c1b]"
      ></button>
    </div>
  );
};

export default SwiperButton;
