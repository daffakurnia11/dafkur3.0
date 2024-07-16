"use client";

import Icon from "@/components/Icon";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Scramble from "@/components/Scramble";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout.Text>
      <Container>
        <TypeAnimation
          className="font-semibold text-xl text-white"
          sequence={[
            "Page Not Found!",
            1000,
            "Oops! Can't locate.",
            1000,
            "Lost. Try again.",
            1000,
            "Page Vanished!",
            1000,
            "Missing Webpage. ",
            1000,
          ]}
          speed={20}
          repeat={Infinity}
          wrapper="h1"
        />
        <TypeAnimation
          className="block text-base text-green-light my-4 sm:min-h-[44px] min-h-[88px]"
          sequence={[
            "Looks like you're off the beaten path! The page you're seeking is playing hide-and-seek. We're on it—hang tight!",
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
      </Container>
    </Layout.Text>
  );
}
