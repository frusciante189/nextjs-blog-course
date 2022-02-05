import Image from "next/image";
import React from "react";

const CategoryCard = () => {
  return (
    <div className="flex p-6 items-center dark:bg-bgGray bg-white cursor-pointer group">
      <div className="flex-1 uppercase space-y-2">
        <p className="font-bold dark:text-white text-darkText dark:group-hover:text-darkBrand group-hover:text-lightBrand transition-colors transform duration-300 ease-in-out capitalize">
          It would be totally painless unconscious
        </p>
        <p className="text-xs font-medium text-lightGray dark:text-darkGray">
          04 FEB 2022
        </p>
      </div>
      <div className="relative flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          width={88}
          height={72}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
