"use client";
import Contacts from "@/components/Contacts";
import Image from "next/image";
import SiteButton from "@/components/SiteButton";
import Link from "next/link";
import MainCard from "@/components/MainCard";
import { uniqueItems } from "./utils/Languages";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  const text = "Developing and Engineering solutions";
  return (
    <>
      <Navbar />
      <div className="bg-myback1 w-full h-full rtl text-right">
        <div className="flex flex-col">
          {/*  */}
          <div className="flex sm:flex-row flex-col bg-myback2 px-10 py-32">
            
            <div className="sm:w-1/2 w-full flex sm:p-16 p-12  flex-col">
              <div className="flex ml-auto">
                <p className="text-l text-myback2 mb-6 bg-myback4 w-24 text-center rounded-xl">
                  ابداء الان
                </p>
              </div>
              <h1 className="sm:text-7xl text-4xl mb-6 text-myback1">
                حلول هندسية وبرمجية
              </h1>
              <p className="text-myback1 mb-12 sm:text-2xl text-xl">
                تقديم الحلول والمساعدة في مجال الهندسة الكهربائية والإلكترونيات،
                بالإضافة إلى تطوير المشاريع البرمجية باستخدام أحدث التقنيات
              </p>
              <div className="flex gap-3 ml-auto text-lg">
                <SiteButton
                  text="تواصل معنا"
                  arrow={false}
                  path="/"
                  bgColor="mygreen1"
                  textColor="myback2"
                />
              </div>
            </div>
            <div className="w-1/2 hidden sm:flex justify-end items-end relative">
              <Image src="/t2.svg" fill className="object-fill" alt="image" />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col bg-myback2 p-10 items-center sm:pb-[200px] sm:pt-14 py-2 rounded-b-[80px]">
            <div>
              <h1 className="sm:text-6xl text-5xl text-myback1">
                الحلول البرمجية
              </h1>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center w-full p-10 gap-5">
              <MainCard
                title="مشاريع علم البيانات"
                des="خدمات مشاريع علوم البيانات التي تشمل التحليل، التنقيب، النمذجة التنبؤية، وتعلم الآلة"
                imagePath="/dev5.svg"
              />
              <MainCard
                title="تطبيقات سطح المكتب"
                des="خدمات تطوير تطبيقات سطح المكتب باستخدام مكتبات البايثون مع الربط بقواعد البيانات"
                imagePath="/dev4.svg"
              />
              <MainCard
                title="تطوير تطبيقات الويب"
                des="خدمات تطوير تطبيقات الويب الشاملة التي تشمل تطوير الواجهة الأمامية والخلفية"
                imagePath="/dev3.svg"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col items-center bg-myback1 px-10 py-16">
            <div className="w-full flex sm:p-16 p-12  flex-col">
              <h1 className="sm:text-6xl text-5xl mb-6 text-myback2 text-center">
                الحلول الهندسية
              </h1>
              <div className="sm:px-[50px] px-3">
                <p className="text-slate-600 mb-12 sm:text-2xl text-xl text-center">
                  تقديم الحلول والمساعدة في مجال الهندسة الكهربائية
                  والإلكترونيات، بما في ذلك تصميم الدوائر الكهربائية، برمجة
                  الأنظمة المدمجة، تنفيذ مشاريع الروبوتات، والتحكم الآلي. نحن
                  نستخدم أحدث التقنيات والأدوات لضمان تقديم حلول فعالة ومبتكرة
                  تناسب احتياجات العملاء وتساعد في تطوير مشروعاتهم الهندسية.
                </p>
              </div>
              <div className="sm:flex hidden relative items-center sm:w-full sm:h-[400px]">
              <Image src="/t3.svg" fill className="object-fill" alt="image" />
            </div>
              <div className=" mx-auto text-lg mt-4">
                <SiteButton
                  text="تعرف علي المزيد"
                  arrow={false}
                  path="/"
                  bgColor="mygreen1"
                  textColor="myback2"
                />
              </div>
              
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col bg-gray-200 p-10 items-center sm:pb-[200px] sm:pt-32 rounded-t-[80px]">
            <div>
              <h1 className="sm:text-6xl text-5xl text-myback2">
              خبراتنا المميزة
              </h1>
            </div>
            {/* <div className="flex sm:flex-row flex-col items-center justify-center w-full p-10 gap-5">
              
            </div> */}
            <div className="flex gap-6 items-center justify-center flex-wrap sm:mt-16  mt-8 mb-8 w-full h-[250px] rounded-xl p-8">
              {uniqueItems.map((lang) => (
                <Image
                  src={lang.imgurl}
                  width={60}
                  height={60}
                  className="sm:w-[60px] w-[30px]"
                  alt="image"
                  key={lang.name}
                />
              ))}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <Footer  />
    </>
  );
}
