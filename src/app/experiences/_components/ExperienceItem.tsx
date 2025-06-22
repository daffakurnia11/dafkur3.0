import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import type { ExperienceDataType } from "@/types/Content";

interface Props extends ExperienceDataType {
  index: number;
}

export default function ExperienceItem({ index, ...data }: Props) {
  return (
    <div className="flex flex-col sm:flex-row w-full items-center gap-1 sm:gap-5 relative">
      <div className="flex-1 w-full">
        <TypeAnimation
          className="text-sm text-green-secondary block text-start sm:text-end"
          sequence={[index * 300, `${data.start} - ${data.end ?? "Present"}`]}
          speed={80}
          cursor={false}
          wrapper="span"
        />
      </div>
      <div className="flex-1 w-full">
        <TypeAnimation
          className="text-green-light text-base"
          sequence={[index * 300, `${data.position}`]}
          speed={80}
          cursor={false}
          wrapper="p"
        />
        <TypeAnimation
          className="block text-sm text-green-secondary"
          sequence={[index * 300, `${data.company}`]}
          speed={80}
          cursor={false}
          wrapper="span"
        />
        <TypeAnimation
          className="block text-sm text-green-secondary"
          sequence={[index * 300, `${data.place}`]}
          speed={80}
          cursor={false}
          wrapper="span"
        />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 1 + index * 0.2,
        }}
        className="absolute w-2 h-2 top-0 sm:top-1/2 -left-4 sm:left-1/2 -translate-x-1/3 sm:-translate-x-1/2 translate-y-3/4 sm:-translate-y-1/2 rounded-full bg-green-primary content-none"
      ></motion.span>
    </div>
  );
}
