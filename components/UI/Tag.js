import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tag = ({ category }) => {
  return (
    <Link href={`./category/${category.slug}`}>
      <div
        className="relative after:absolute after:w-full after:h-full after:top-0 cursor-pointer
    after:left-0 after:bg-black after:opacity-0 after:transition-all 
    after:duration-500 after:transform after:ease-in-out hover:after:opacity-10"
      >
        <div className="sm:aspect-square aspect-video relative group rounded-sm overflow-hidden">
          <Image
            src={category.featuredCategoryImage.url}
            layout="fill"
            objectFit="cover"
            className=""
            alt={category.name}
          />
        </div>
        <div className="absolute bottom-0 p-4 sm:p-3 lg:p-2 left-0 text-white font-semibold">
          <h1>{category.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Tag;
