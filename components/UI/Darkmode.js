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
      className="border h-7 w-7 inline-flex items-center justify-center rounded-lg"
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
