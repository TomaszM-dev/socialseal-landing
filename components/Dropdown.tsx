"use client";
import React from "react";
import { motion } from "framer-motion";
import { ColumnTypes, NavbarItemTypes } from "@/types/NavbarTypes";
import { fadeIn } from "@/animations/animations";

const renderColumn = (column: ColumnTypes) => {
  return (
    <div className="mt-10 flex-1">
      <h3 className="text-[1.5rem] text-secondary-dark font-light border-b-[1px] border-gray-100 pb-4">
        {column.headline}
      </h3>
      {column.paragraph && (
        <p className="mt-8 text-[1rem] font-[200] text-secondary-dark-light">
          {column.paragraph}
        </p>
      )}
      <ul className="mt-8 flex flex-col gap-1">
        {column.info.map((infoItem, index) => (
          <li
            className="text-[1rem] font-[200] text-secondary-dark-light "
            key={index}
          >
            {infoItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Dropdown = ({ data }: { data: NavbarItemTypes }) => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      exit="hidden"
      className="flex  border-t border-gray-100 absolute top-0 left-0 mt-24 w-full bg-white px-10 flex-col gap-20"
    >
      {[data]?.map((item, index) => (
        <div key={index} className="flex justify-between w-full gap-10">
          {renderColumn(item.firstColumn)}
          {renderColumn(item.secondColumn)}
          {renderColumn(item.thirdColumn)}
          {renderColumn(item.fourthColumn)}
        </div>
      ))}
      <button className="text-blue-500 border border-blue-500 rounded-3xl px-14 py-6 mx-auto mt-4">
        View All Services
      </button>
    </motion.div>
  );
};

export default Dropdown;
