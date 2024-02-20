"use client";
import React from "react";
import { motion } from "framer-motion";
import { ColumnTypes, NavbarItemTypes } from "@/types/NavbarTypes";
import { fadeIn } from "@/animations/animations";
import renderDropdownItem from "./RenderDropdownItem";

const DeskopDropdown = ({ data }: { data: NavbarItemTypes }) => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      exit="hidden"
      className="absolute top-24 max-md:top-36 left-0 w-full backdrop-contrast-75 h-screen z-10"
    >
      <motion.div
        exit="hidden"
        className="flex pb-10  shadow-dropdown border-t border-gray-100  max-md:top-4 left-0  w-full bg-white px-10 flex-col gap-20 z-10"
      >
        {[data].map((item, index) => renderDropdownItem(item, index))}
        <button className="text-blue-500 border border-blue-500 rounded-3xl px-14 py-6 mx-auto mt-4">
          View All Services
        </button>
      </motion.div>
    </motion.div>
  );
};

export default DeskopDropdown;
