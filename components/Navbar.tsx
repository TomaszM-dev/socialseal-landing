"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoImg from "../public/logo/social-seal-logo.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { navbarDropdownData } from "@/data/Navbar-dropdown-data";
import Dropdown from "./Dropdown";
import { AnimatePresence } from "framer-motion";
import { NavbarDropdownData } from "@/types/NavbarTypes";

const navbarData: NavbarDropdownData = navbarDropdownData();

const Navbar = () => {
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleClick = (link: string) => {
    setDropdownStates((prevState) => ({
      ...Object.fromEntries(
        Object.keys(prevState).map((key) => [
          key,
          key === link ? !prevState[key] : false,
        ])
      ),
      [link]: !prevState[link],
    }));
  };

  return (
    <nav className="max-w-[1440px] mx-auto w-full py-5 px-10 relative bg-[#FEFEFE] ">
      <div className="flex justify-between items-center">
        <p className="cursor-pointer flex items-center">
          <Image
            src={logoImg}
            alt="Social Seal Logo"
            className="object-cover w-[6.5rem]"
          />
        </p>
        <div className="flex gap-6 text-primary-dark text-[1rem] items-center">
          <p>Marketing</p>
          <p>Management</p>
          <p>Increase Sales</p>
          {navbarData.map((data) => (
            <div key={data.link}>
              <button
                className={`${
                  dropdownStates[data.link] ? "active" : ""
                } flex items-center gap-1 cursor-pointer`}
                onClick={() => handleClick(data.link)}
              >
                {data.link}
                <div>
                  {dropdownStates[data.link] ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
              </button>
              <AnimatePresence mode="wait">
                {dropdownStates[data.link] && <Dropdown data={data} />}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <p className="bg-accent-orange text-white px-4 py-3 rounded-2xl text-[1rem] cursor-pointer">
          Speak With Us!
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
