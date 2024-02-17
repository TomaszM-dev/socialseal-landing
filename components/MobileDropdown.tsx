import React from "react";
import { motion } from "framer-motion";
import { ColumnTypes, NavbarItemTypes } from "@/types/NavbarTypes";
import { fadeIn } from "@/animations/animations";

const renderColumnHeadlines = (columns: ColumnTypes[]) => {
  return (
    <div className=" flex-1">
      <ul className="my-8 flex flex-col gap-4 items-center">
        {columns.map((column, index) => (
          <li className="text-[1.4rem] font-[200]" key={index}>
            {column.headline}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Dropdown = ({ data }: { data: NavbarItemTypes }) => {
  return (
    <motion.div className="flex  items-center">
      <div className="">
        {renderColumnHeadlines([
          data.firstColumn,
          data.secondColumn,
          data.thirdColumn,
          data.fourthColumn,
        ])}
      </div>
    </motion.div>
  );
};

export default Dropdown;
