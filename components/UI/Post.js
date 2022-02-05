import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col group overflow-hidden cursor-pointer">
      <div className="lg:aspect-[6/7] aspect-square relative">
        <Image
          src="https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1608&q=80"
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-all tranform duration-500 ease-in-out"
        />
      </div>
      <div className="dark:bg-bgGray bg-white dark:text-white text-darkText lg:p-8 sm:p-6 p-4 space-y-2">
        <h1 className="dark:group-hover:text-darkBrand group-hover:text-lightBrand xl:text-2xl sm:text-xl text-lg font-bold">
          A Documentary About the Important Things
        </h1>
        <div className="uppercase text-xs tracking-wider flex space-x-2 font-medium dark:text-darkGray text-darkText">
          <h1 className="">Liam Gallagher</h1>
          <span>04 JAN 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
