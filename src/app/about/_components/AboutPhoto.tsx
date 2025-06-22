import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
    >
      <div className="w-full max-w-[300px] mx-auto lg:mt-16 rounded-2xl overflow-hidden">
        <Image
          src="/profile.png"
          alt="Daffa Kurnia Fatah"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </motion.div>
  );
}
