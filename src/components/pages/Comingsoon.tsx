"use client";

import Icon from "@/components/Icon";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Scramble from "@/components/Scramble";
import TextLayout from "../Layout/TextLayout";

export default function Comingsoon() {
  return (
    <TextLayout>
      <TypeAnimation
        className="font-semibold text-xl text-white"
        sequence={[
          "Stay Tuned!",
          1000,
          "Await Launch!",
          1000,
          "On the Horizon!",
          1000,
          "Almost Here. Await!",
          1000,
          "Coming Soon!",
          1000,
        ]}
        speed={20}
        repeat={Infinity}
        wrapper="h1"
      />
      <TypeAnimation
        className="block text-base text-green-light my-4 sm:min-h-[44px] min-h-[88px]"
        sequence={[
          "Something incredible! We're putting the finishing touches on a project that'll blow your mind. Hang tight as we get ready to share it with you!",
        ]}
        speed={90}
        cursor={false}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 1.5 }}
      >
        <Link href={"/"} className="flex items-center gap-2">
          <Icon
            icon="arrow-right-linear"
            className="text-green-primary"
            size={16}
          />
          <Scramble className="text-base text-green-light underline">
            Get back to Home!
          </Scramble>
        </Link>
      </motion.div>
    </TextLayout>
  );
}
