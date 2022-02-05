import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "../../context/theme";

const Darkmode = () => {
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={themeHandler}
      className="border h-7 w-7 inline-flex items-center justify-center rounded-lg 
      dark:text-white dark:border-white text-darkText border-darkText
      focus:border-transparent focus:outline-2 focus:outline-transparent focus:ring focus:ring-lightBrand
      dark:focus:border-transparent dark:focus:outline-2 dark:focus:outline-transparent dark:focus:ring dark:focus:ring-darkBrand
      transition-all transform duration-300 ease-in-out"
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default Darkmode;
