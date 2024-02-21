"use client";
import React from "react";
import Button from "../common/Button";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import customers from "../../public/social-media-banner/customers.png";
import projects from "../../public/social-media-banner/projects.png";
import workers from "../../public/social-media-banner/workers.png";
import office from "../../public/social-media-banner/office.png";
import Image from "next/image";

const SocialMediaBanner = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className=" mt-[-4rem]  pt-40 pb-20  max-md:text-center  bg-[#292F3E] text-white  "
    >
      <div className="section flex  gap-5 px-10 max-md:flex-col max-md:px-[5rem] max-sm:px-4">
        <div className="flex-1 flex flex-col gap-7">
          <p className="text-[#FFD437] font-[400] text-[20px]">
            Social Media Management is
          </p>
          <h2 className="text-[3.1rem] font-[700] leading-[4rem]">
            Building Brands Creating Connections Driving Sales
          </h2>
          <div className="flex  flex-col gap-6 text-[#BBBBBB] text-[1.1rem] font-[300] leading-[33px]">
            <p className="">
              Social Media is more than just posting and showing off how many
              followers you have. It&apos;s a valuable addition to your
              marketing strategy that builds trust and creates connections with
              potential customers to drive sales and increase your revenue.
            </p>
            <p>
              Save your time and money by partnering with us and start seeing
              results that give you the highest return on investment.
            </p>
            <p>After all; when you grow, we grow together.</p>
          </div>
          <div className="flex  gap-14 mt-10 max-md:items-center max-md:justify-center max-md:mb-10 max-sm:gap-8 max-sm:flex-col">
            <Button className="bg-accent-blue max-sm:w-full px-8 max-sm:px-20  py-5 text-white rounded-2xl text-[1.1rem]">
              Contact Us
            </Button>
            <Button className=" text-accent-blue text-[1.1rem]">
              How Can We Help
            </Button>
          </div>
        </div>

        <div className="flex-1  max-sm:gap-6  max-md:gap-8  flex  max-sm:flex-col  ">
          <div className="flex-1 max-sm:gap-6  max-sm:flex-none  flex-col max-sm:mt-0  mt-20  max-md:h-[30rem] gap-10 flex items-end max-md:items-end max-sm:items-center">
            <div className="relative rounded-xl flex-1  max-w-[250px] max-h-[250px] w-full  bg-white  text-black flex flex-col items-center justify-center gap-4 ">
              {inView && (
                <CountUp
                  className="text-[3rem] font-[800] z-10 text-[#F76766]"
                  start={0}
                  end={100}
                  duration={3}
                  delay={0}
                />
              )}
              <Image
                className="absolute bottom-0 left-0 z-2"
                src={office}
                alt=""
              />
              <p className="text-[1.2rem] z-10">Offices</p>
            </div>
            <div className=" rounded-xl flex-1 max-w-[250px] max-h-[250px] w-full  bg-white  text-black flex flex-col items-center justify-center gap-4 relative ">
              {inView && (
                <CountUp start={0} end={15} duration={3} delay={0.4}>
                  {({ countUpRef }) => (
                    <div className="text-[3rem] font-[800] text-[#57C0CE]">
                      <span ref={countUpRef}></span>
                      <span>K</span>
                    </div>
                  )}
                </CountUp>
              )}
              <Image
                className="absolute bottom-0 left-0 z-2"
                src={customers}
                alt=""
              />
              <p className="text-[1.2rem] z-10">Customers</p>
            </div>
          </div>
          <div className=" flex-1 max-sm:gap-6 max-sm:flex-none  flex-col max-sm:mt-0    max-md:h-[30rem]  gap-10 flex items-end max-md:items-start max-sm:items-center  ">
            <div className="rounded-xl flex-1 max-w-[250px] max-h-[250px] w-full  bg-white  text-black flex flex-col items-center justify-center gap-4 relative">
              {inView && (
                <CountUp
                  className="text-[3rem] font-[800] text-[#265FDB]"
                  start={0}
                  end={50}
                  duration={3}
                  delay={0.2}
                />
              )}
              <p className="text-[1.2rem] z-10">Workers</p>
              <Image
                className="absolute bottom-0 right-0 z-2 max-sm:left-0"
                src={workers}
                alt=""
              />
            </div>
            <div className=" rounded-xl flex-1 max-w-[250px] max-h-[250px] w-full  bg-white relative text-black flex flex-col items-center justify-center gap-4 ">
              {inView && (
                <CountUp
                  separator=""
                  start={0}
                  end={1300}
                  duration={2}
                  delay={0.2}
                >
                  {({ countUpRef }) => (
                    <div className="text-[3rem] z-10 font-[800] text-[#A666F7]">
                      <span ref={countUpRef}></span>
                      <span>+</span>
                    </div>
                  )}
                </CountUp>
              )}
              <Image
                className="absolute bottom-0 right-0 z-2 max-sm:left-0"
                src={projects}
                alt=""
              />

              <p className="text-[1.2rem] z-10">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaBanner;
