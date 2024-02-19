"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoImg from "../../public/logo/social-seal-logo.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { navbarDropdownData } from "@/data/Navbar-dropdown-data";
import { AnimatePresence, motion } from "framer-motion";
import { NavbarDropdownData } from "@/types/NavbarTypes";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarLinks from "./NavbarLinks";
import { fadeIn } from "@/animations/animations";
import Button from "../common/Button";

const Navbar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const [openLinks, setOpenLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width <= 685);
      setIsTabletScreen(width > 685 && width <= 1008);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className=" max-md:px-4 max-w-[1440px] mx-auto w-full py-7 px-10 relative bg-[#FEFEFE] ">
      <div className="flex justify-between overflow-hidden items-center">
        <div className="max-md:flex-1">
          <Image
            src={logoImg}
            alt="Social Seal Logo"
            className=" "
            width={100}
            height={100}
          />
        </div>
        {!isTabletScreen && !isMobileScreen && <NavbarLinks />}
        {isMobileScreen || (
          <Button className="bg-accent-orange px-7 py-3 rounde  text-white">
            Speak With Us
          </Button>
        )}

        <GiHamburgerMenu
          onClick={() => setOpenLinks(!openLinks)}
          className="md:hidden  cursor-pointer text-[1.8rem] text-accent-orange max-md:ml-6"
        />
      </div>
      <AnimatePresence mode="wait">
        {openLinks && isTabletScreen && (
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" mt-7 border-b-[1px] pb-4 z-20"
          >
            <NavbarLinks />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {openLinks && isMobileScreen && (
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" absolute top-28 left-0 z-10 w-screen shadow-lg pb-10  bg-white flex flex-col items-center gap-10"
          >
            <NavbarLinks />
            <Button className="bg-accent-orange max-sm:px-20 max-sm:py-5 text-white text-[1.2rem] rounded-2xl">
              Speak With Us
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
