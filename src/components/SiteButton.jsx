import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function SiteButton({ path, arrow, bgColor, textColor, text }) {
  return (
    <motion.div
      initial={{ x: 0 }}
      whileHover={{
        x: 6,
        opacity: 0.9,
        transition: { duration: 0.2 },
      }}
      className="w-32"
    >
      <Link
        href={path}
        className={`p-2 bg-${bgColor} flex items-center justify-center rounded-md text-${textColor} text-l`}
      >
        {text} {arrow && "→"}
      </Link>
    </motion.div>
  );
}

export default SiteButton;
