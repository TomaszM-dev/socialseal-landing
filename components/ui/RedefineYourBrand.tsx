import React from "react";
import Button from "../common/Button";
import BrandSlider from "../sliders/BrandSlider";

const RedefineYourBrand = () => {
  return (
    <section className=" bg-[#292F3E] py-20 text-white">
      <div className="section  ">
        <div className="flex flex-col items-center gap-4  w-[50%] mx-auto mb-20 max-slg:w-[70%] max-sm:w-[100%] max-sm:px-4">
          <p className="text-[#F89E52] font-[400] text-[20px]">
            Our Expertise is Your Success
          </p>
          <h2 className="text-[3.1rem] max-sm:text-[2.2rem] max-sm:leading-[3rem] font-[700] leading-[4rem] text-center">
            We Can’t Wait To Redefine Your Brand
          </h2>
        </div>
      </div>
      <BrandSlider />
      <div className="section flex items-center justify-between mt-20 px-10 max-sm:flex-col max-sm:px-6 max-sm:gap-4 max-sm:mt-14 ">
        <h2 className="text-[3.1rem] max-sm:text-[1.4rem] max-sm:leading-[3rem] font-[700] leading-[4rem] max-slg:text-[2.6rem] text-center max-slg:text-start max-sm:text-center   ">
          What Are You Waiting For?
        </h2>
        <Button className="bg-accent-blue max-sm:w-full px-12   py-5 text-white rounded-2xl max-md:self-center max-md:w-[60%] w-fit text-[1.1rem]">
          Protect Your Brand
        </Button>
      </div>
    </section>
  );
};

export default RedefineYourBrand;
