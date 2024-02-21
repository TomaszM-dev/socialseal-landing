"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoImg from "../../public/logo/social-seal-logo.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { navbarDropdownData } from "@/data/Navbar-dropdown-data";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { NavbarDropdownData } from "@/types/NavbarTypes";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarLinks from "./NavbarLinks";
import { fadeIn } from "@/animations/animations";
import Button from "../common/Button";
import useResize from "@/hooks/useResize";

const Navbar = () => {
  const resize = useResize();
  const [openLinks, setOpenLinks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setOpenLinks(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="max-md:px-4  mx-auto w-full py-7 px-10  bg-[#FEFEFE] z-20 relative ">
      <div className="max-w-[1200px] mx-auto flex justify-between overflow-hidden items-center ">
        <div className="max-md:flex-1">
          <Image
            src={logoImg}
            alt="Social Seal Logo"
            className=" "
            width={100}
            height={100}
          />
        </div>

        {/* genertaing navbar links */}
        {!resize.isTabScreen && !resize.isMobileScreen && <NavbarLinks />}
        {resize.isMobileScreen || (
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
        {openLinks && resize.isTabScreen && (
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
        {openLinks && resize.isMobileScreen && (
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute  top-24 left-0 h-screen backdrop-brightness-75 w-full"
          >
            <motion.div className="  max absolute top-0 left-0 z-10 w-screen shadow-lg pb-10  bg-white flex flex-col items-center gap-10">
              <NavbarLinks />
              <Button className="bg-accent-orange max-sm:px-20 max-sm:py-5 text-white text-[1.2rem] rounded-2xl">
                Speak With Us
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
