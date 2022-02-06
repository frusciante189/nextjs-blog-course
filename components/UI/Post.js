import moment from "moment";
import Image from "next/image";
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="flex flex-col group overflow-hidden cursor-pointer">
      <div className="lg:aspect-[6/7] aspect-square relative">
        <Image
          src={post.featuredImage.url}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-all tranform duration-500 ease-in-out"
        />
      </div>
      <div className="dark:bg-bgGray bg-white dark:text-white text-darkText lg:p-8 sm:p-6 p-4 space-y-2">
        <h1 className="dark:group-hover:text-darkBrand group-hover:text-lightBrand xl:text-2xl sm:text-xl text-lg font-bold">
          {post.title}
        </h1>
        <div className="uppercase text-xs tracking-wider flex space-x-2 font-medium dark:text-darkGray text-darkText">
          <h1 className="">{post.authors[0].name}</h1>
          <span>{moment(post.createdAt).format("DD MMM YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
