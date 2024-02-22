"use client";
import React from "react";
import Button from "../common/Button";
import line from "../../public/content-banner/line.png";
import line2 from "../../public/content-banner/line2.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";
import PhotoSlider from "../sliders/PhotoSlider";
import useResize from "@/hooks/useResize";

const ContentBanner = () => {
  const resize = useResize();

  return (
    <section
      className="flex flex-col 
      pt-10 pb-20  max-sm:pt-4  overflow-hidden max-md:text-center "
    >
      <motion.div
        initial={{ rotate: -50, x: -20 }}
        transition={{ duration: 1 }}
        whileInView={{ rotate: 0, x: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        className="w-fit max-w-[1400px] "
      >
        <Image src={line} alt="" className="ml-4 max-md:ml-10 "></Image>
      </motion.div>
      <div className="  flex  px-10 section flex-1  gap-10  max-md:flex-col max-md:px-10 max-sm:px-4 ">
        <div className=" max-w-[1240px] flex-1 flex flex-col gap-7 ">
          <p className="text-[#F89E52] font-[400] text-[20px]">
            Our Expertise is Your Success
          </p>
          <h3 className="text-[3.1rem] max-sm:text-[2.6rem] text-[#0B0B0B] font-[700] leading-[4rem]">
            Struggling to Make Engaging Content?
          </h3>

          <p className="text-[#727272]  font-[300] leading-[33px] text-[1.2rem]">
            From the research and planning to creating striking images and
            videos for your posts, our service focuses on creating a
            <span className="underline px-2 text-[#191919]">unique voice </span>
            for your brand that will
            <span className="underline px-2 text-[#191919]">
              engage your audience
            </span>
            and keep them coming back for more!
          </p>

          <Button className="max-md:hidden bg-accent-blue px-12 max-sm:px-20 w-fit  py-5 text-white  rounded-2xl text-[1.1rem]">
            View More
          </Button>

          <motion.div
            initial={{ rotate: -20, x: -40 }}
            transition={{ duration: 1 }}
            whileInView={{ rotate: 0, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="max-md:hidden w-full flex justify-center mt-[-2rem]"
          >
            <Image src={line2} alt="" className="ml-[4rem]"></Image>
          </motion.div>
        </div>
        <div className="w-[60%] max-md:mx-auto max-md:w-[100%] ">
          <PhotoSlider />
        </div>

        {resize.isTabScreen ||
          (resize.isMobileScreen && (
            <Button className="max-md:self-center max-md:bg-accent-blue px-12 max-sm:px-20 w-fit max-sm:w-full   py-5 text-white rounded-2xl text-[1.1rem]">
              View More
            </Button>
          ))}
      </div>
    </section>
  );
};

export default ContentBanner;
