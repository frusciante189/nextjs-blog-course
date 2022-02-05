import Image from "next/image";
import React from "react";

const PinnedPost = () => {
  return (
    <div className="flex sm:flex-row flex-col relative pattern group sm:max-h-[400px] md:max-h-max overflow-hidden">
      <div className="relative md:aspect-video aspect-square sm:w-3/4 w-full">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-all transform duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div
        className="sm:absolute md:top-1/3 top-[30%] right-10 dark:bg-bgGray bg-white dark:text-white text-darkText lg:p-8 sm:p-6 p-4
      shadow-[8px_8px_0] dark:shadow-bgGray shadow-[#ECECEC] space-y-2
      sm:w-2/5 w-full"
      >
        <h1 className="xl:text-2xl sm:text-xl text-lg capitalize font-bold dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors duration-300 transform ease-in-out cursor-pointer">
          Optimizing Your Content with GraphCMS
        </h1>
        <div className="flex space-x-2 text-xs uppercase font-medium">
          <h1 className="">John Frusciante</h1>
          <span>3 Feb, 2022</span>
        </div>
      </div>
    </div>
  );
};

export default PinnedPost;
