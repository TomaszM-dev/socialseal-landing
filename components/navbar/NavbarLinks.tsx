import { navbarDropdownData } from "@/data/Navbar-dropdown-data";
import { NavbarDropdownData } from "@/types/NavbarTypes";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MobileDropdown from "../dropdown/MobileDropdown";
import Link from "next/link";
import DeskopDropdown from "../dropdown/desktop-dropdown-components/DesktopDropdown";

const navbarData: NavbarDropdownData = navbarDropdownData();
const NavbarLinks = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width <= 685);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="flex  max-md:w-full max-md:justify-between overflow-hidden gap-6 text-primary-dark text-[1rem] max-sm:text-[1.4rem] items-center max-sm:flex-col">
      <Link href="/">Marketing</Link>
      <Link href="/">Management</Link>
      <Link href="/">Increase Sales</Link>
      {navbarData.map((data) => (
        <div
          key={data.link}
          className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center  max-sm:w-full"
        >
          <Link
            href={"/"}
            className={`${
              dropdownStates[data.link]
                ? "active max-sm:border-b-[1px] max-sm:z-20  max-sm:pb-4 max-sm:border-accent-orange"
                : ""
            } flex items-center gap-1 cursor-pointer  `}
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
          </Link>
          {!isMobileScreen ? (
            <AnimatePresence mode="wait">
              {dropdownStates[data.link] && <DeskopDropdown data={data} />}
            </AnimatePresence>
          ) : (
            <AnimatePresence mode="wait">
              {dropdownStates[data.link] && <MobileDropdown data={data} />}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarLinks;
