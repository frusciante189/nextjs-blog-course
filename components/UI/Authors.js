import Image from "next/image";
import React from "react";

const Authors = () => {
  return (
    <div className="flex p-6 items-center space-x-6 cursor-pointer group dark:bg-bgGray bg-white">
      <div className="w-16 h-16 relative rounded-full flex-shrink-0 ring ring-[#383840] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-sm dark:text-white text-darkText font-bold dark:group-hover:text-darkBrand group-hover:text-lightBrand">
          Olivia Thomas
        </p>
        <p className="text-xs text-lightGray dark:text-darkGray">
          I love creating clean and minimal websites
        </p>
      </div>
    </div>
  );
};

export default Authors;
