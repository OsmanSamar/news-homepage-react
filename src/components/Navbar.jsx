import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          {/* The ReactComponent import syntax is a special syntax used by Create
          React App for importing SVG files as React components. */}
          <Logo alt="Logo Icon" />
        </div>

        <div className="hidden space-x-6  md:flex">
          <a href="#home" className="text-gray-500 hover:text-soft-red">
            Home
          </a>
          <a href="#new" className=" text-gray-500 hover:text-soft-red">
            New
          </a>
          <a href="#popular" className="text-gray-500 hover:text-soft-red">
            Popular
          </a>
          <a href="#trending" className="text-gray-500 hover:text-soft-red">
            Trending
          </a>
          <a href="#categories" className="text-gray-500 hover:text-soft-red">
            Categories
          </a>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            type="button"
            className=""
            aria-controls=",online-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <BiMenu
              size={26}
              className={` ${
                isOpen ? "hidden" : "block"
              }  text-gray-700 dark:text-gray-300 `}
            />

            <AiOutlineClose
              size={26}
              className={` ${
                isOpen ? "block" : "hidden"
              } h-6 w-6 dark:text-gray-400 `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu*/}
      <div
        className={` ${isOpen ? "block pt-4" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div
          className=" absolute flex flex-col items-left 
           self-end py-8 px-8 mt-10 space-y-6
         font-bold bg-white sm:w-full left-24 right-0  drop-shadow-lg"
        >
          <a href="home" onClick={toggleMenu} className="cursor-pointer">
            Home
          </a>
          <a href="new" onClick={toggleMenu} className="cursor-pointer">
            New
          </a>
          <a href="popular" onClick={toggleMenu} className="cursor-pointer">
            Popular
          </a>
          <a href="trending" onClick={toggleMenu} className="cursor-pointer">
            Trending
          </a>
          <a href="categories" onClick={toggleMenu} className="cursor-pointer">
            Categories
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
