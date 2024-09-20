import React from "react";
import Link from "next/link";
import { FaShuttleSpace } from "react-icons/fa6";
import Contacts from "./Contacts";
import Image from "next/image";

function Footer() {
  return (
    <div className="h-48 w-full bg-white rounded-t-xl py-4">
      <div className="w-full h-full flex flex-col items-center justify-around">
        <Link href="/" className="flex items-center justify-end my-3">
          <div className="flex flex-col justify-center items-center text-sm">
            <p className="text-myback2">مركز البرمجة</p>
            <p className="text-orange-600">و الخدمات الهندسية</p>
          </div>
          <Image src="/logoo.svg" alt="image" width={50} height={50} />
        </Link>
        <Contacts size={20} />

        <div className="flex gap-3">
          <Link href="/dev-space/contact">اتصل بنا</Link>
          <Link href="/dev-space/projects">المشاريع</Link>
          <Link href="/dev-space/services">الخدمات</Link>
          <Link href="/dev-space">الرئيسية</Link>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <p className="text-xl sm:text-sm">
          &copy; <span>2024</span> جميع الحقوق محفوظة - مركز البرمجة و الخدمات الهندسية
        </p>
      </div>
    </div>
  );
}

export default Footer;
