"use client";

import React from "react";
import Menu from "./Top/Menu";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { firstLoading } from "@/utils/atom";
import Logo from "./Top/Logo";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isVisible = useAtomValue(firstLoading);

  return (
    <AnimatePresence>
      {isVisible || (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween" }}
          className="min-h-dvh relative"
        >
          <div className="absolute top-0 left-0 px-6 py-4">
            <Logo />
          </div>
          <Menu />
          <div className="min-h-dvh flex-col justify-center items-center">
            {children}
          </div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
