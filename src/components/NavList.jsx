import React from "react";
import Link from "next/link";

function NavList({url, pathName, closeMenu}) {
  const urls = [
    { name: "الخدمات", url: "/dev-space/services" },
    { name: "المشاريع", url: "/dev-space/projects" },
    { name: "اتصل بنا", url: "/dev-space/contact" },
  ];

  return (
    <Link
    onClick={closeMenu}
      className={`${
        pathName === url.url && "bg-mygreen1 text-black border border-black rounded p-1"
      }`}
      key={url.name}
      href={url.url}
    >
      {url.name}
    </Link>
  );
}

export default NavList;
