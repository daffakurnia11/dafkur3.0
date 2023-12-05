"use client";

import React from "react";
import Footer from "@/components/Layout/Footer";
import Logo from "@/components/Layout/Logo";
import Navigation from "@/components/Layout/Navigation";
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
          <Logo />
          <Navigation />
          <div className="layout-content">{children}</div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
