import React from "react";
import data from "./Data/Navdata";
import Navlink from "./UI/Navlink";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:pt-16 lg:pb-8 sm:pt-12 sm:pb-6 pt-8 pb-4 dark:bg-bgGray bg-[#ECECEC]">
      <section className="max-w-6xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col space-y-3">
              <h1 className="text-sm uppercase font-bold dark:text-white text-darkText">
                Tags
              </h1>
              <div className="flex flex-col space-y-1.5">
                {data.map((item, index) => {
                  return (
                    <Navlink title={item.title} key={index} slug={item.slug} />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-sm uppercase font-bold dark:text-white text-darkText">
                Navigation
              </h1>
              <div className="flex flex-col space-y-1.5">
                {data.map((item, index) => {
                  return (
                    <Navlink title={item.title} key={index} slug={item.slug} />
                  );
                })}
              </div>
            </div>
            <div className="w-full sm:w-4/5">
              <h1 className="text-sm uppercase font-bold dark:text-white text-darkText">
                Subscribe
              </h1>
              <div className="mt-5 flex dark:bg-bgDarkColor bg-neutral-100 rounded-full w-full">
                <input
                  type="text"
                  className="bg-transparent pl-6 py-4 pr-4 text-sm flex-1 focus:outline-none caret-white"
                  placeholder="Your Email"
                />
                <button className="dark:bg-[#010101] bg-[#313638] flex-shrink-0 font-semibold text-sm text-white rounded-full sm:px-8 px-5 py2 sm:py-4 dark:hover:bg-darkBrand hover:bg-lightBrand transition-colors duration-300 transform ease-in-out">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs text-lightGray dark:text-darkGray font-medium">
              &copy; 2022 Frus - Published with{" "}
              <span className="dark:hover:text-darkBrand hover:text-lightBrand transition-colors duration-200 ease-in-out transform cursor-pointer">
                GraphCMS
              </span>{" "}
              &{" "}
              <span className="dark:hover:text-darkBrand hover:text-lightBrand transition-colors duration-200 ease-in-out transform cursor-pointer">
                Nextjs
              </span>
            </p>
            <div className="flex space-x-2 text-white items-center">
              <FaFacebookF
                size={18}
                className="dark:hover:text-darkBrand hover:text-lightBrand transition-colors duration-300 transform ease-in-out cursor-pointer"
              />
              <FaTwitter
                size={18}
                className="dark:hover:text-darkBrand hover:text-lightBrand transition-colors duration-300 transform ease-in-out cursor-pointer"
              />
              <FaInstagram
                size={18}
                className="dark:hover:text-darkBrand hover:text-lightBrand transition-colors duration-300 transform ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
