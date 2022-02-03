import Link from "next/link";
import React from "react";
import Navlink from "./UI/Navlink";
import data from "./Data/Navdata";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Darkmode from "./UI/Darkmode";

const Navbar = () => {
  return (
    <header className="lg:py-12 sm:py-8 py-6 text-white">
      <section className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-4xl cursor-pointer font-semibold tracking-wide">
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
                <a className="text-sm font-medium px-4 py-1 bg-darkBrand rounded-full">
                  Subscribe
                </a>
              </Link>
              <Darkmode />
              <button className="cursor-pointer">
                <SearchIcon className="w-4 h-4" />
              </button>
            </nav>
            <button className="lg:hidden block">
              <MenuIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
