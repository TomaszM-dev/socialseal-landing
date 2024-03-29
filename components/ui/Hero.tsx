"use client";
import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { PiGoogleLogoThin } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";
import Image from "next/image";
import carGirl from "../../public/hero/car-girl.png";
import shopGirl from "../../public/hero/baker-girl.png";
import beachGirl from "../../public/hero/beach-girl.png";
import brands from "../../public/hero/brands.png";
import useResize from "@/hooks/useResize";

const Hero = () => {
  const resize = useResize();

  return (
    <section
      className="flex 
      section w-full mt-4 max-sm:px-2 px-10 max-sm:mt-0 flex-col gap-20"
    >
      <div
        className="flex h-fit
      section w-full   gap-14 max-xmd:gap-10  max-xmd:flex-col max-sm:gap-10  "
      >
        <div className="flex-1  max-xmd:items-center w-full h-full  max-sm:px-4  flex flex-col justify-start gap-10 mt-10">
          <Button className="px-4 max-sm:px-2 max-sm:text-[1.1rem] max-sm:w-full max-xmd:px-6 max-xmd:text-[1.2rem] bg-accent-orange w-fit text-white py-3">
            Social Media Marketing That works!
          </Button>
          <h1 className="text-[3.9rem] text-primary-dark font-[700] leading-[3.7rem] max-xmd:leading-[5rem]  max-sm:text-[2.5rem] max-sm:leading-[3.6rem] capitalize max-xmd:text-center ">
            Save Time <br className="max-xmd:hidden " /> Build Connections
            Increase Profits
          </h1>
          {!resize.isTabScreen && <ViewPlans />}
        </div>
        <div className="flex-1 relative w-full  max-sm:px-4 flex  gap-4  max-xmd:mx-auto  max-sm:w-[100%] max-xmd:justify-center ">
          <div className="flex relative flex-col gap-4 ">
            <Image
              src={shopGirl}
              alt=""
              className="object-cover rounded-lg "
            ></Image>
            <Image
              src={carGirl}
              alt=""
              className="object-cover rounded-lg"
            ></Image>
          </div>
          <div className="  flex relative flex-col  gap-4">
            <Image
              src={beachGirl}
              alt=""
              className="object-cover    rounded-lg "
            ></Image>
          </div>
        </div>
        {resize.isTabScreen && (
          <div className="flex items-center w-full flex-col gap-10">
            <ViewPlans />
          </div>
        )}
      </div>
      <div className="w-full   mx-auto  rounded-3xl max-md:mt-0 mt-2 flex items-center justify-center bg-[#1D1D25] p-12 max-md:p-16 relative  max-md:mx-auto">
        <Image
          src={brands}
          className="object-cover     max-md:absolute max-md:top-10 max-md:left-0 max-md:w-full max-md:h-[3rem] max-md:px-0"
          alt=""
        ></Image>
      </div>
    </section>
  );
};

const ViewPlans = () => {
  return (
    <>
      <div className="flex gap-2 text-[2rem] text-secondary-dark-light">
        <CiLinkedin />
        <CiFacebook />
        <CiInstagram />
        <CiTwitter />
        <PiGoogleLogoThin />
        <SlSocialYoutube />
      </div>
      <div className="flex mt-6 max-md:mt-0 max-sm:mt-0 gap-16 max-sm:w-full">
        <Button className="bg-accent-blue max-sm:w-full max-sm:rounded-3xl px-8 py-5 text-white rounded-2xl text-[1.1rem]">
          View Our Plans
        </Button>
        <Button className="max-md:hidden text-accent-blue text-[1.1rem]">
          What We Offer
        </Button>
      </div>
    </>
  );
};

export default Hero;
