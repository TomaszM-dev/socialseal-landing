"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import slider1 from "../../public/content-banner/photo-slider.png";
import slider2 from "../../public/content-banner/photo-slider2.png";
import slider3 from "../../public/content-banner/photo-slider3.png";
import Image from "next/image";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const imgArr = [slider1, slider2, slider3, slider1, slider2, slider3];

const PhotoSlider = () => {
  const [isTabScreen, setIsTabScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 1000) {
        setIsTabScreen(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-[146%]  max-s1:w-[160%] max-s2:w-[190%] max-md:w-full  mx-auto  ">
      <Swiper
        spaceBetween={isTabScreen ? 60 : 110}
        slidesPerView={isTabScreen ? 2 : 3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {imgArr.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={`Slider Image ${index + 1}`}
              className=" max-md:w-full max-w-[370px] max-md:max-w-full  "
              width={400}
              height={400}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
