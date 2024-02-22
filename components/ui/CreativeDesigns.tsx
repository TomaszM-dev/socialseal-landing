import React from "react";
import Button from "../common/Button";
import company from "../../public/creative-design-banner/company.png";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const CreativeDesigns = () => {
  return (
    <section className=" section py-20  flex flex-col  ">
      <div className="flex flex-col items-center gap-5  w-[60%] mx-auto mb-20 max-md:mb-8 max-slg:w-[70%] max-sm:w-[100%] max-sm:px-4 max-md:w-[90%]">
        <p className="text-[#F89E52] font-[400] text-[20px]">
          Our Expertise is Your Success
        </p>
        <h2 className="text-[3.1rem] max-md:text-[2.9rem] max-sm:text-[2.1rem] max-sm:leading-[2.8rem] font-[700] leading-[4rem] text-center">
          We Create Creative Designs For Every Web Page
        </h2>
        <p className="text-center text-[1.2rem] text-secondary-dark-light font-[300]">
          Staying on top of how your brand is being used is an important aspect
          to protect your identity and reputation.
        </p>
      </div>
      <div className="flex w-full h-full gap-20 max-md:gap-4 max-md:flex-col max-md:items-center">
        <div className="flex-1  ">
          <Image src={company} alt="" className="max-md:p-10 max-sm:p-4" />
        </div>
        <div className="flex-1  flex flex-col gap-6 pt-6 max-md:items-center">
          <h3 className="gradient text-[3.1rem] leading-[3.7rem] font-[700] w-[50%] max-slg:w-[70%] max-sm:text-[2.4rem] max-md:text-center max-sm:w-[90%] max-sm:leading-[3.4rem]">
            All Your Questions Are Here
          </h3>
          <div className="flex max-sm:px-4 flex-col gap-3 text-[1.1rem] text-[#959EB6]">
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-[1.4rem] text-green-500" />
              Seo quotes to inspire your campaign
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-[1.4rem] text-green-500" />
              Much easier to double your business
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-[1.4rem] text-green-500 " />
              Free page speed insights tool to find out exactly
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-[1.4rem] text-green-500" />
              Seo quotes to inspire your campaign
            </p>
          </div>
          <Button className=" mt-8 bg-accent-blue max-sm:w-fit px-12 max-sm:px-14  py-5 text-white rounded-2xl max-md:self-center max-md:w-[40%] w-fit  text-[1.1rem]">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreativeDesigns;
