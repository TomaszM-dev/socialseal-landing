import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import socialTrolls from "../../public/troubles-with-audience-banner/social-trolls.png";
import floatingIcon from "../../public/troubles-with-audience-banner/floating-icon.png";
import floatingCircle from "../../public/troubles-with-audience-banner/floating-circle.png";
import exclamation from "../../public/troubles-with-audience-banner/exclamation.png";
import FlyingIcons from "./FlyingIcons";

const TroublesWithAudienceBanner = () => {
  return (
    <section className=" max-md:mt-[0rem] max-md:pt-0 max-md:flex-col max-md:items-center flex section    pb-20  max-md:text-center ]">
      <div className="flex-1  justify-start  flex items-center ">
        <div className=" p-10 max-md:w-[70%] max-sm:w-[100%] max-sm:p-4 max-md:mx-auto relative w-full h-full flex items-center justify-center">
          <Image alt="" src={socialTrolls} className="" />
          <Image
            alt=""
            src={floatingCircle}
            className="absolute max-sm:hidden top-60 right-40 animate-[fly_10s_linear_infinite] "
          />
          <Image
            alt=""
            src={floatingIcon}
            className=" absolute max-sm:hidden  left-40  animate-[flyRev_10s_linear_infinite]"
          />
        </div>
      </div>
      <div className="max-md:mt-24 flex-1  gap-5 px-10 max-md:flex-col max-md:px-[5rem] max-sm:px-4 max">
        <div className="flex-1 flex flex-col gap-10">
          <p className="text-[#F89E52] font-[400] text-[20px]">
            Our Expertise is Your Success
          </p>
          <h2 className="text-[3.1rem] max-sm:text-[2.4rem] max-sm:leading-[3rem] font-[700] leading-[4rem]">
            Troubles Growing Your Audience?
          </h2>
          <div className="flex  flex-col gap-6  text-[#727272]  font-[300] leading-[33px] text-[1.2rem]">
            <p className="">
              Staying on top of how your brand is being used is an important
              aspect to protect your identity and reputation.
            </p>
            <p>
              Our sophisticated threat monitoring system enables us to quickly
              identify threats towards your brand and deal with them to prevent
              damage to your reputation.
            </p>
            <p>The most common threats we encounter:</p>
          </div>
          <div className="max-md:justify-center flex flex-wrap text-[1.1rem] gap-x-1 gap-y-2 ">
            <p className="px-5 py-2 bg-[#FFFAF1] border-[1px] border-[#F89E52] rounded-3xl">
              Brand Impresonation
            </p>
            <p className="px-5 py-2 bg-[#FFFFEE] border-[1px] border-[#FFF04D] rounded-3xl">
              Compromised Account
            </p>
            <p className="px-5 py-2 bg-[#FFFAF1] border-[1px] border-[#F89E52] rounded-3xl">
              Scams
            </p>
            <p className="px-5 py-2 bg-[#F6FCFF] border-[1px] border-[#C7D9F2] rounded-3xl">
              Hi-Jacked Posts
            </p>
            <p className="px-5 py-2 bg-[#FFFFEE] border-[1px] border-[#FFF04D] rounded-3xl">
              Bad Sentiment
            </p>
            <p className="px-5 py-2 bg-[#FFF6FA] border-[1px] border-[#FFB6D8] rounded-3xl">
              Bad Reviews
            </p>
            <p className="px-5 py-2 bg-[#F7FFF7] border-[1px] border-[#CFE2CF] rounded-3xl">
              Competitor Envy
            </p>
            <p className="px-5 py-2 bg-[#F6FCFF] border-[1px] border-[#C7D9F2] rounded-3xl">
              False Media
            </p>
            <p className="px-5 py-2 bg-[#FFF6F6] border-[1px] border-[#FFAFAF] rounded-3xl">
              Low Social Authority
            </p>
            <p className="px-5 py-2 bg-[#FCF9FF] border-[1px] border-[#DAC0FF] rounded-3xl">
              Information Inaccuracy
            </p>
            <p className="px-5 py-2 bg-[#FFF6FA] border-[1px] border-[#FFB6D8] rounded-3xl">
              Missed Messages
            </p>
          </div>

          <div className="flex  gap-14  max-md:items-center max-md:justify-center max-md:mb-10 max-sm:gap-8 max-sm:flex-col">
            <Button className="bg-accent-blue max-sm:w-full px-12 max-sm:px-20  py-5 text-white rounded-2xl text-[1.1rem]">
              Protect Your Brand
            </Button>
            <Button className="max-md:hidden text-accent-blue text-[1.1rem]">
              Find Out More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TroublesWithAudienceBanner;
