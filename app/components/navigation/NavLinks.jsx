"use client";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { linksData } from "./links";
import { CgMenuMotion } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useNavbarStore } from "@/app/store/navbarStore";

const NavLinks = () => {
  const { isOpen, toggleNavbar } = useNavbarStore();

  const buttonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  const navVariants = {
    closed: { x: "100%" }, // Off-screen to the right
    open: {
      x: 0, // Slide in from the right
      transition: { duration: 0.3, ease: "easeOut" }, // Animation settings
    },
  };

  return (
    <div className="w-full h-auto flex justify-end items-center relative">
      <div className="md:hidden p-2 flex justify-center items-center">
        <motion.button
          onClick={toggleNavbar}
          animate={isOpen ? "open" : "closed"}
          variants={buttonVariants}
        >
          {isOpen ? (
            <CgClose size={30} className="text-2xl" />
          ) : (
            <CgMenuMotion size={30} className="text-2xl" />
          )}
        </motion.button>
      </div>

      <motion.ul className="w-full hidden md:flex gap-3 justify-end items-center">
        {linksData.map((links) => (
          <Link key={links.id} href={links.url}>
            <li className="p-1 px-3 font-semibold hover:bg-secondary rounded-md transition-all ease-in-out duration-300">
              {links.title}
            </li>
          </Link>
        ))}
      </motion.ul>

      <AnimatePresence>
        {isOpen && ( // Only render mobile nav when isOpen is true
          <motion.ul
            className="w-1/2 h-auto bg-background p-5 md:hidden flex flex-col gap-3  justify-center items-end absolute top-12 -right-5 rounded-b-md"
            variants={navVariants} // Apply same animation variants to mobile nav
            initial="closed" // Set initial state to closed
            animate="open" // Always animate mobile nav to open state
            exit="closed" // Set initial state to closed
          >
            {linksData.map((links) => (
              <Link
                key={links.id}
                href={links.url}
                className="w-full text-end hover:bg-secondary rounded-md transition-all ease-in-out duration-300"
              >
                <li className="p-1 px-3 font-semibold">{links.title}</li>
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavLinks;
