"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useResize from "@/hooks/useResize";

import slide1 from "../../public/redefine-your-brand-banner/slide1.png";
import slide2 from "../../public/redefine-your-brand-banner/slide2.png";
import slide3 from "../../public/redefine-your-brand-banner/slide3.png";
import slide4 from "../../public/redefine-your-brand-banner/slide4.png";
import slide5 from "../../public/redefine-your-brand-banner/slide5.png";
import slide6 from "../../public/redefine-your-brand-banner/slide6.png";
import slide7 from "../../public/redefine-your-brand-banner/slide7.png";
import slide8 from "../../public/redefine-your-brand-banner/slide8.png";
import slide9 from "../../public/redefine-your-brand-banner/slide9.png";
import slide10 from "../../public/redefine-your-brand-banner/slide10.png";

const firstSlideArr = [
  slide1,
  slide6,
  slide2,
  slide7,
  slide3,
  slide8,
  slide4,
  slide9,
  slide5,
  slide10,
];
const secondSlideArr = [
  slide6,
  slide1,
  slide7,
  slide2,
  slide8,
  slide3,
  slide9,
  slide4,
  slide10,
  slide5,
];

const BrandSlider = () => {
  const [currentNumberSlides, setCurrentNumberSlides] = useState(3);
  const resize = useResize();

  useEffect(() => {
    if (resize.isTabScreen) {
      setCurrentNumberSlides(2);
    } else if (resize.isMobileScreen) {
      setCurrentNumberSlides(1);
    } else setCurrentNumberSlides(3);
  }, [resize]);

  return (
    <div className=" max-w-[1440px] mx-auto ">
      <Swiper
        spaceBetween={-70}
        slidesPerView={1.1}
        autoplay={{
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          550: {
            spaceBetween: -110,
            slidesPerView: 1.1,
          },
          700: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3.4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {firstSlideArr.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${
                index % 2 === 1 ? "" : ""
              } relative w-full h-full flex justify-center max-sm:px-12`}
            >
              <Image
                src={image.src}
                alt={`Slider Image ${index + 1}`}
                width={400}
                height={300}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={-70}
        slidesPerView={1.1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          550: {
            spaceBetween: -110,
            slidesPerView: 1.1,
          },
          700: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3.4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {secondSlideArr.map((image, index) => (
          <SwiperSlide className="" key={index}>
            <div
              className={`${
                index % 2 === 1 ? "mt-10" : ""
              } relative w-full h-full flex justify-center max-sm:px-12`}
            >
              <Image
                src={image.src}
                alt={`Slider Image ${index + 1}`}
                width={400}
                height={300}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
