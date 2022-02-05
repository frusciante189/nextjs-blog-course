import Image from "next/image";
import React from "react";

const Tag = () => {
  return (
    <div
      className="relative after:absolute after:w-full after:h-full after:top-0 
    after:left-0 after:bg-black after:opacity-0 after:transition-all 
    after:duration-500 after:transform after:ease-in-out hover:after:opacity-10"
    >
      <div className="sm:aspect-square aspect-video relative group rounded-sm overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="absolute bottom-0 p-4 sm:p-3 lg:p-2 left-0 text-white font-semibold">
        <h1>Travel (4)</h1>
      </div>
    </div>
  );
};

export default Tag;
