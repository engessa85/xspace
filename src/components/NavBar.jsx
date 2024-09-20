"use client";

import React, { useState } from "react";
import { FaShuttleSpace } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavList from "./NavList";
import Image from "next/image";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const urls1 = [
    { name: "الرئيسية", url: "/" },
    { name: "الخدمات", url: "/dev-space/services" },
    { name: "المشاريع", url: "/dev-space/projects" },
    { name: "اتصل بنا", url: "/dev-space/contact" },
  ];

  const urls2 = [
    { name: "الرئيسية", url: "/" },
    { name: "الخدمات", url: "/dev-space/services" },
    { name: "المشاريع", url: "/dev-space/projects" },
    { name: "اتصل بنا", url: "/dev-space/contact" },
  ];

  const pathName = usePathname();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="h-20 w-full bg-myback2 shadow-md relative">
      <div className="px-4 md:container sm:mx-auto h-full flex items-center justify-between">
        {/* Burger Menu (left) */}
        <div
          className="p-2 flex flex-col z-[9999] relative md:hidden cursor-pointer"
          onClick={handleMenu}
        >
          <div
            className={`${
              menu ? "bg-myback1" : "bg-myback1"
            } h-1 w-6 mb-1 rounded`}
          ></div>
          <div
            className={`${
              menu ? "bg-myback1" : "bg-myback1"
            } h-1 w-6 mb-1 rounded`}
          ></div>
          <div
            className={`${menu ? "bg-myback1" : "bg-myback1"} h-1 w-6  rounded`}
          ></div>
        </div>

        {/* Nav items (left) */}
        <div className="w-2/3 items-center justify-start gap-6 text-xl hidden md:flex text-myback1">
          {urls2.map((url) => (
            <NavList key={url.name} url={url} pathName={pathName} />
          ))}
        </div>

        {/* XSpace link (right) */}
        <Link href="/" className="w-1/3 flex items-center justify-end">
          
          <div className="md:flex flex-col justify-center items-center text-sm  hidden">
            <p className="text-myback1 sm:text-[16px] sm:font-bold text-sm">مركز البرمجة</p>
            <p className="text-orange-600 sm:text-[16px] sm:font-bold text-sm">والخدمات الهندسية</p>
          </div>
          <Image src= "/logoo.svg" alt="image" width={50} height={50} />
        </Link>

        {/* Mobile Menu Overlay */}
        {menu && (
          <div className="absolute top-0 left-0 w-full h-screen bg-myback2 text-myback1 z-[9998] flex flex-col items-center pt-28 gap-6 text-xl md:hidden">
            {urls1.map((url) => (
              <NavList
                key={url.name}
                url={url}
                pathName={pathName}
                closeMenu={closeMenu}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
