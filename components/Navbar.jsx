"use client"; // Ensure this component is client-side rendered
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import { menu } from "@/data/menu"; // Ensure this imports your menu data correctly
import { HiOutlineX, HiMenuAlt3 } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPage = usePathname();
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="container mx-auto px-4 xl:px-0">
      <div className="py-4 flex justify-between items-center">
        <Image src={logo} alt="logo" priority />
        <HiMenuAlt3
          size={30}
          className="cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
        <div
          className={`fixed lg:relative bg-black top-0 bottom-0 w-full h-screen 
            lg:h-auto ${
              show ? "right-0" : "-right-full"
            } lg:right-0 flex gap-10 flex-col lg:flex-row justify-center lg:justify-end items-center
            transition-all duration-300`}
        >
          <HiOutlineX
            size={30}
            className="text-white absolute top-7 right-7 cursor-pointer lg:hidden"
            onClick={toggleMenu}
          />
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              className={`text-white ${
                currentPage === item.url ? "font-bold" : ""
              }`} // Conditionally apply class
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
