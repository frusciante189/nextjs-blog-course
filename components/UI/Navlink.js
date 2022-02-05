import Link from "next/link";
import React from "react";

const Navlink = ({ title, slug }) => {
  return (
    <Link href={slug}>
      <a
        className="text-xs font-medium uppercase dark:text-white text-darkText
       dark:hover:text-darkBrand hover:text-lightBrand transition-colors duration-300 transform ease-in-out"
      >
        {title}
      </a>
    </Link>
  );
};

export default Navlink;
