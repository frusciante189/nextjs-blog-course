import Link from "next/link";
import React from "react";

const Navlink = ({ title, slug }) => {
  return (
    <Link href={slug}>
      <a className="text-xs font-medium">{title}</a>
    </Link>
  );
};

export default Navlink;
