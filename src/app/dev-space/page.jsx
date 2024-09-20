"use client";
import React from "react";
import SiteButton from "@/components/SiteButton";
import Image from "next/image";

function page() {
  return (
    <div className="bg-myback1">
  <div className="px-4 md:py-[100px] py-[70px] sm:container sm:mx-auto flex flex-col md:flex-row justify-center">
    {/* Image Section (Left Side) */}
    <div className="flex-1 bg-[url('/s1.svg')] bg-cover bg-center hidden lg:flex "></div>

    {/* Text Section (Right Side) */}
    <div className="flex-1 flex flex-col gap-12">
      <h1 className="text-4xl md:text-6xl text-myback2 text-right">
        مساحة التطوير
      </h1>
      <p className="text-sm md:text-xl text-slate-600 text-right">
        نحن نقدم مجموعة كاملة من خدمات التطوير لمساعدتك في تحويل أفكارك إلى
        حقيقة. بدءًا من تطبيقات الويب المخصصة والبرامج المكتبية القوية إلى
        التطبيقات المحمولة البديهية، نبني حلولًا مخصصة حسب احتياجاتك
        الخاصة. يمتد نطاق خبرتنا إلى التقنيات المتقدمة مثل علم البيانات
        والتعلم الآلي (ML) والذكاء الاصطناعي (AI).
      </p>
      <div className="flex gap-3 flex-wrap ml-auto">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
          width={50}
          height={50}
          className="sm:w-[50px] w-[30px]"
          alt="image"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          width={50}
          height={50}
          className="sm:w-[50px] w-[30px]"
          alt="image"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          width={50}
          height={50}
          className="sm:w-[50px] w-[30px]"
          alt="image"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg"
          width={50}
          height={50}
          className="sm:w-[50px] w-[30px]"
          alt="image"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          width={50}
          height={50}
          className="sm:w-[50px] w-[30px]"
          alt="image"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          width={50}
          height={50}
          className="sm:w-[50px] w-[30px]"
          alt="image"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          width={50}
          height={50}
          className="sm:w-[50px] w-[30px]"
          alt="image"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg"
          width={50}
          height={50}
          className="sm:w-[50px] w-[30px]"
          alt="image"
        />
      </div>
      <div className="ml-auto">
      <SiteButton
        path="/dev-space/services"
        arrow={false}
        bgColor="mygreen1"
        textColor="myback2"
        text="مزيد من المعلومات"
      />
      </div>
    </div>
  </div>
</div>

  );
}

export default page;
