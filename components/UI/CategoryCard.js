import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ post }) => {
  return (
    <Link href={`./posts/${post.slug}`}>
      <div className="flex p-6 items-center dark:bg-bgGray bg-white cursor-pointer group">
        <div className="flex-1 uppercase space-y-2">
          <p className="font-bold dark:text-white text-darkText dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out capitalize">
            {post.title}
          </p>
          <p className="text-xs font-medium text-lightGray dark:text-darkGray">
            {moment(post.createdAt).format("DD MMM YYYY")}
          </p>
        </div>
        <div className="relative flex-shrink-0">
          <Image
            src={post.featuredImage.url}
            width={88}
            height={72}
            objectFit="cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
