import Image from "next/image";
import Link from "next/link";
import React from "react";

const Authors = ({ author }) => {
  return (
    <Link href={`/authors/${author.slug}`}>
      <div className="flex p-6 items-center space-x-6 cursor-pointer group dark:bg-bgGray bg-white">
        <div className="w-16 h-16 relative rounded-full flex-shrink-0 ring ring-[#383840] overflow-hidden">
          <Image
            src={author.photo.url}
            layout="fill"
            objectFit="cover"
            alt={author.name}
          />
        </div>
        <div className="flex-1">
          <p className="text-sm dark:text-white text-darkText font-bold dark:group-hover:text-darkBrand group-hover:text-lightBrand">
            {author.name}
          </p>
          <p className="text-xs text-lightGray dark:text-darkGray">
            {author.bio}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Authors;
