"use client";
import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import shape from "../../public/reputation-sales-banner/shape.png";
import shape2 from "../../public/reputation-sales-banner/shape2.png";
import heart from "../../public/reputation-sales-banner/heart.png";
import instagram from "../../public/reputation-sales-banner/instagram.png";
import facebook from "../../public/reputation-sales-banner/facebook.png";
import phone from "../../public/reputation-sales-banner/phone.png";
import notificationMessage from "../../public/reputation-sales-banner/notification-message.png";
import heartChat from "../../public/reputation-sales-banner/heart-red-chat.png";

const ReputationSalesBanner = () => {
  return (
    <section className="max-md:mt-10 max-md:flex-col max-md:items-center flex section   pb-20  max-md:text-center ]">
      <div className="w-[55%] max-md:w-[70%] max-sm:w-[85%] max-sm:px-2  flex justify-center items-center">
        <div className="border-2 p-24  max-md:p-16 max-sm:p-12 max-slg:p-16 rounded-[20%] relative">
          <Image src={phone} className="" alt="" />
          <Image
            src={heartChat}
            className="absolute px-4 bottom-[-2rem] "
            alt=""
          />
          <Image
            src={instagram}
            className="absolute  bottom-44 right-[-2rem] "
            alt=""
          />
          <Image
            src={heart}
            className="absolute px-1 top-[-2.5rem] right-32 "
            alt=""
          />
          <Image
            src={notificationMessage}
            className="absolute  top-20 left-[-1.8rem]"
            alt=""
          />
          <Image
            src={facebook}
            className="absolute  top-[45%] left-16"
            alt=""
          />
        </div>
      </div>
      <div className="max-md:mt-24 flex-1  gap-5 px-10 max-md:flex-col max-md:px-[5rem] max-sm:px-4">
        <div className="flex-1 flex flex-col gap-10">
          <motion.div
            initial={{ rotate: -50, x: -20 }}
            transition={{ duration: 1 }}
            whileInView={{ rotate: 0, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="self-end mr-20 max-md:hidden"
          >
            <Image alt="" src={shape}></Image>
          </motion.div>
          <p className="text-[#F89E52] font-[400] text-[20px]">Worry-free</p>
          <h2 className="text-[3.1rem] max-sm:text-[2.4rem] max-sm:leading-[3rem] font-[700] leading-[4rem]">
            Risking Your Reputation and Losing Sales?
          </h2>
          <div className="flex  flex-col gap-6  text-[#727272]  font-[300] leading-[33px] text-[1.2rem]">
            <p className="">
              Our 24/7 Inbox Management is your answer to keep up with messages
              and not miss out on potential leads.
            </p>
            <p>
              By offering quick replies to your audience you will elevate your
              brands image and help you get the sale.
            </p>
          </div>

          <Button className="bg-accent-blue max-sm:w-full px-12 max-sm:px-20  py-5 text-white rounded-2xl max-md:self-center max-md:w-[60%] w-fit text-[1.1rem]">
            Start Replying Faster
          </Button>
          <motion.div className="self-end mt-[-4rem] mr-10 animate-[move_3s_ease_infinite] max-md:hidden">
            <Image alt="shape" src={shape2}></Image>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReputationSalesBanner;
