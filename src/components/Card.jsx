import React from "react";
import Image from "next/image";
import SiteButton from "./SiteButton";
import { MdVerified } from "react-icons/md";
import { motion } from "framer-motion";

function Card({ type, title, desc, langs, mainImage }) {
  return (
    <div className="w-full sm:h-[450px] h-auto bg-green-30 border hover:border-myback2 hover:shadow-2xl rounded-xl shadow-xl bg-myback4">
      <div className="p-14">
        <div className="flex sm:flex-row flex-col w-full sm:h-[250px]">
          <div className="sm:w-[40%] w-full hidden sm:flex items-center">
            <Image
              src={mainImage}
              width={350}
              height={350}
              className="rounded-lg"
              alt="image"
            />
          </div>
          <div className="sm:w-[60%] w-full flex flex-col items-start gap-6">
            <div className="flex justify-center items-center gap-2 ml-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MdVerified className="text-blue-500 sm:text-3xl text-xl" />
              </motion.div>
              <div className="bg-myyellow1 p-1 rounded-md w-24 text-center">
                {type}
              </div>
            </div>
            <h1 className="sm:text-5xl text-3xl text-myback2 ml-auto">
              {title}
            </h1>
            <p className="sm:text-l text-sm text-myback2 max-w-[90%] ml-auto text-right">
              {desc}
            </p>
            <div className="flex gap-3 flex-wrap ml-auto">
              {langs.map((lang) => (
                <Image
                  src={lang.imgurl}
                  width={50}
                  height={50}
                  className="sm:w-[50px] w-[30px]"
                  alt="image"
                  key={lang.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[70px] items-center justify-start sm:justify-end flex">
          <SiteButton
            path="https://api.whatsapp.com/send?phone=201557080199"
            arrow={false}
            bgColor="mygreen1"
            textColor="myback2"
            text="ابداء الآن"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
