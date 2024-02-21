"use client";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";
import shape2 from "../../public/reputation-sales-banner/shape2.png";
import shape from "../../public/growing-audience-banner/shape.png";
import social from "../../public/growing-audience-banner/social.png";

const GrowingAudienceBanner = () => {
  return (
    <section className=" mt-[-4rem] max-md:mt-[0rem] max-md:pt-0 max-md:flex-col max-md:items-center flex section  max-md:flex-col-reverse pt-40 pb-20  max-md:text-center ]">
      <div className="max-md:mt-24 flex-1  gap-5 px-10 max-md:flex-col max-md:px-[5rem] max-sm:px-4 ">
        <div className="flex-1 flex flex-col gap-10">
          <motion.div
            initial={{ rotate: -15, x: -20 }}
            transition={{ duration: 1 }}
            whileInView={{ rotate: 0, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="self-end mr-[-8rem] max-md:hidden"
          >
            <Image alt="" src={shape}></Image>
          </motion.div>
          <p className="text-[#F89E52] font-[400] text-[20px]">
            Thinking "Outside The Box"
          </p>
          <h2 className="text-[3.1rem] max-sm:text-[2.4rem] max-sm:leading-[3rem] font-[700] leading-[4rem]">
            Troubles Growing Your Audience?
          </h2>
          <div className="flex  flex-col gap-6  text-[#727272]  font-[300] leading-[33px] text-[1.2rem]">
            <p className="">
              Attract new followers that are relevant to your objectives by
              reaching outside your social media bubble, and you'll start to see
              a quicker return on your investment.
            </p>
            <p>
              Along with captivating visuals, our teams perform countless hours
              of research and planning to deliver optimized marketing campaigns
              that target your ideal audience who are most likely to convert
              into leads.
            </p>
            <p>
              By thoroughly planning your paid Social Media Advertising
              campaign, we are able to ensure that every penny of your marketing
              budget is well spent.§
            </p>
          </div>

          <Button className="bg-accent-blue max-sm:w-full px-12 max-sm:px-20  py-5 text-white rounded-2xl max-md:self-center max-md:w-[60%] w-fit text-[1.1rem]">
            Start Driving Sales
          </Button>
          <motion.div className="self-center mt-[-4rem] ml-24 animate-[move_3s_ease_infinite] max-md:hidden">
            <Image alt="shape" src={shape2}></Image>
          </motion.div>
        </div>
      </div>
      <div className="flex-1 flex items-center ">
        <Image src={social} alt="" />
      </div>
    </section>
  );
};

export default GrowingAudienceBanner;
