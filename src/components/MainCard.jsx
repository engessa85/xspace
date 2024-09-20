import React from "react";
import Link from "next/link";
import Image from "next/image";

function MainCard({ title, des, imagePath }) {
  return (
    <div className="flex-1 bg-myback1 p-5 rounded-2xl flex flex-col justify-between items-center border-[0.1px] border-gray-700 w-full h-[300px]">
      <Image src={imagePath} alt="image" width={70} height={70} />
      <h1 className="text-3xl font-light text-myback2">{title}</h1>
      <div className="flex items-center justify-center"> 
        <p className="text-center text-lg text-slate-400">{des}</p>
      </div>
      <Link
        href="/dev-space"
        className="bg-mygreen1 rounded-md p-2 hover:opacity-[0.6] text-sm flex items-center justify-center w-30 sm:ml-auto  text-myback2"
      >
        استكشف المزيد
      </Link>
    </div>
  );
}

export default MainCard;
