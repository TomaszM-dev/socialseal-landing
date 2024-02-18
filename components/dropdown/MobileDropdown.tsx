// MobileDropdown.tsx
import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      variants={fadeIn("down", 0.1)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-fit border-gray-100  "
    >
      <div className="my-8 flex flex-col gap-4 h-fit items-center ">
        {renderHeadlines(data).map((headline) => {
          return (
            <Link
              className="text-[1.4rem] font-[200]"
              href="/"
              key={headline.headline}
            >
              {headline.headline}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileDropdown;
