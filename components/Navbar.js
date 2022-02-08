import Link from "next/link";
import React from "react";
import Navlink from "./UI/Navlink";
import data from "./Data/Navdata";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Darkmode from "./UI/Darkmode";

const Navbar = () => {
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
              </button>
            </nav>
            <button className="lg:hidden block dark:text-white text-darkText">
              <MenuIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
