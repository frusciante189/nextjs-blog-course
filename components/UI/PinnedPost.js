import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PinnedPost = ({ post }) => {
  return (
    <div className="flex sm:flex-row flex-col relative pattern group sm:max-h-[400px] md:max-h-max overflow-hidden">
      <Link href={`./posts/${post.slug}`}>
        <div className="relative md:aspect-video aspect-square sm:w-3/4 w-full">
          <Image
            src={post.featuredImage.url}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-all transform duration-500 ease-in-out cursor-pointer"
          />
        </div>
      </Link>
      <Link href={`./posts/${post.slug}`}>
        <div
          className="sm:absolute md:top-1/3 top-[30%] right-10 dark:bg-bgGray bg-white dark:text-white text-darkText lg:p-8 sm:p-6 p-4
      shadow-[8px_8px_0] dark:shadow-bgGray shadow-[#ECECEC] space-y-2
      sm:w-2/5 w-full"
        >
          <h1 className="xl:text-2xl sm:text-xl text-lg capitalize font-bold dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors duration-300 transform ease-in-out cursor-pointer">
            {post.title}
          </h1>
          <div className="flex space-x-2 text-xs uppercase font-medium">
            <h1 className="">{post.authors[0].name}</h1>
            <span>{moment(post.createdAt).format("DD MMM YYYY")}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PinnedPost;
