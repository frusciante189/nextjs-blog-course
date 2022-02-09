import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Navlink from "./UI/Navlink";
import data from "./Data/Navdata";
import { MenuIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Darkmode from "./UI/Darkmode";
import useWindowSize from "./useWindowSize";

const Navbar = ({ isOpen, setIsOpen }) => {
  const ref = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (size.width < 1024) {
        if (!ref.current.contains(e.target)) {
          if (!isOpen) return;
          setIsOpen(false);
        }
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [ref, isOpen]);

  return (
    <header className="lg:py-10 sm:py-8 py-6 text-white">
      <section className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4 ">
        <div className="flex justify-between items-center border-b lg:pb-8 pb-4 border-bgGray">
          <Link href="/">
            <h1 className="text-4xl cursor-pointer font-semibold tracking-wide dark:text-white text-darkText">
              Frus
            </h1>
          </Link>
          <div>
            <nav className="lg:flex hidden space-x-4 items-center">
              {data.map((item, index) => {
                return (
                  <Navlink title={item.title} key={index} slug={item.slug} />
                );
              })}
              <Link href="/">
                <a
                  className="text-sm font-medium px-4 py-1 dark:bg-darkBrand bg-lightBrand rounded-full 
                dark:hover:bg-black hover:bg-[#313638] transition-colors duration-300 transform ease-in-out"
                >
                  Subscribe
                </a>
              </Link>
              <Darkmode />
              <button className="cursor-pointer dark:text-white dark:border-white text-darkText border-darkText">
                <SearchIcon className="w-4 h-4" />
                <span className="sr-only">Search Icon</span>
              </button>
            </nav>
            <button
              className="lg:hidden block dark:text-white text-darkText"
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon className="w-8 h-8" />
              <span className="sr-only">Menu Icon</span>
            </button>
          </div>
          {/* Mobile Menu  */}
          <div
            ref={ref}
            className={`fixed top-0 right-0 sm:w-80 w-full h-full bg-white dark:bg-bgDarkColor z-20 transition-all duration-500 ease-in-out transform: ;
            ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }
            `}
          >
            <nav className="flex flex-col space-y-6 items-start p-10">
              {data.map((item, index) => {
                return (
                  <Navlink title={item.title} key={index} slug={item.slug} />
                );
              })}
              <Link href="/">
                <a
                  className="font-medium px-4 py-1 dark:bg-darkBrand bg-lightBrand rounded-full 
                dark:hover:bg-black hover:bg-[#313638] transition-colors duration-300 transform ease-in-out"
                >
                  Subscribe
                </a>
              </Link>
              <Darkmode />
              <button className="cursor-pointer dark:text-white dark:border-white text-darkText border-darkText">
                <SearchIcon className="w-4 h-4" />
                <span className="sr-only">Search Icon</span>
              </button>
              <button
                className="absolute top-0 right-0 pr-5 dark:text-white text-darkText"
                onClick={() => setIsOpen(false)}
              >
                <XIcon className="w-8 h-8" />
                <span className="sr-only">Close Icon</span>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
