"use client";

import React from "react";
import Menu from "./Menu";
import Logo from "@/components/Layout/Logo";
import Footer from "@/components/Layout/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { firstLoading } from "@/utils/atom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isVisible = useAtomValue(firstLoading);

  return (
    <AnimatePresence>
      {isVisible || (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween" }}
        >
          <div className="absolute top-0 left-0 px-6 py-4">
            <Logo />
          </div>
          <Menu />
          <div className="pt-[100px] pb-[70px] min-h-dvh flex justify-center items-center">
            {children}
          </div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
