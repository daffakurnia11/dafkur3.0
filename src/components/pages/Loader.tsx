"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { firstLoading } from "@/utils/atom";
import Logo from "../Layout/Top/Logo";

export default function Loader() {
  const [isVisible, setIsVisible] = useAtom(firstLoading);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <section className="absolute top-0 bottom-0 left-0 right-0 h-dvh w-full flex justify-center items-center bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 2 }}
            exit={{ opacity: 0 }}
          >
            <Logo delay={200} />
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
}
