"use client";
import React from "react";
import Button from "../common/Button";
import developer from "../../public/what-we-do/developer.png";
import bakery from "../../public/what-we-do/bakery.png";
import Image from "next/image";
import useResize from "@/hooks/useResize";

const WhatWeDo = () => {
  const resize = useResize();

  return (
    <section className=" my-10 max-md:mt-[3rem] max-md:pt-0 max-md:flex-col max-md:items-center flex section pb-20  max-md:text-center ]">
      <div className="flex-1 flex items-center  ">
        <Image src={resize.isMobileScreen ? bakery : developer} alt="" />
      </div>
      <div className=" flex-1 mt-6 gap-5 px-10 max-md:flex-col max-md:px-[2rem] max-sm:px-4 max">
        <div className="flex-1 flex flex-col gap-7">
          <p className="text-[#F89E52] font-[400] text-[20px]">What We Do </p>
          <h2 className="text-[3.1rem]  max-sm:text-[2rem] max-sm:leading-[3rem] font-[700] leading-[4rem]">
            We design and develop web and mobile applications for our clients
            worldwide
          </h2>
          <div className="flex  flex-col gap-6  text-[#727272]  font-[300] leading-[33px] text-[1.2rem]">
            <p className="">
              Staying on top of how your brand is being used is an important
              aspect to protect your identity and reputation.
            </p>
          </div>

          <Button className="bg-accent-blue max-sm:w-full px-12 max-sm:px-20  py-5 text-white rounded-2xl max-md:self-center max-md:w-[60%] w-fit text-[1.1rem]">
            Protect Your Brand
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
