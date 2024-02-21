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
import useResize from "@/hooks/useResize";

const imgArr = [slider1, slider2, slider3, slider1, slider2, slider3];

const PhotoSlider = () => {
  const [currentNumberSlides, setCurrentNumberSlides] = useState(3);
  const resize = useResize();

  useEffect(() => {
    if (resize.isTabScreen) {
      setCurrentNumberSlides(2);
    } else if (resize.isMobileScreen) {
      setCurrentNumberSlides(1);
    } else setCurrentNumberSlides(3);
  }, [resize]);

  console.log(resize.isMobileScreen);
  console.log(resize.isTabScreen);
  console.log(currentNumberSlides);
  return (
    <div className="w-[160%]  max-s1:w-[160%] max-slg:w-[190%] max-sm:w-[150%] max-md:w-full  mx-auto  ">
      <Swiper
        spaceBetween={resize.isTabScreen ? 30 : 20}
        slidesPerView={resize.isMobileScreen ? 2 : currentNumberSlides}
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
              className=" max-md:w-full max-w-[370px] max-md:max-w-full  max-sm:w-[100%] max-sm:mx-auto  "
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
