import React from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ColumnTypes, NavbarItemTypes } from "@/types/NavbarTypes";
import { fadeIn } from "@/animations/animations";
import Link from "next/link";

const MobileDropdown = ({ data }: { data: NavbarItemTypes }) => {
  const renderHeadlines = (data: NavbarItemTypes) => {
    const columns = Object.values(data).filter(
      (item) => typeof item === "object" && item.hasOwnProperty("headline")
    ) as ColumnTypes[];

    return columns;
  };

  return (
    <motion.div className="flex  border-gray-100  ">
      <motion.div className="my-8 flex flex-col gap-4  items-center ">
        {renderHeadlines(data).map((headline) => {
          return (
            <motion.div key={headline.headline}>
              <Link
                className="text-[1.1rem] font-[300] "
                href="/"
                key={headline.headline}
              >
                {headline.headline}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default MobileDropdown;
