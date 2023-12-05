"use client";

import Icon from "@/components/Icon";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Scramble from "@/components/Scramble";

export default function NotFound() {
  return (
    <section className="notfound text-layout d-flex justify-content-center align-items-center">
      <Container>
        <TypeAnimation
          className="text-heading-4"
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
          className="d-block notfound-desc text-body text-light-green mt-3"
          sequence={[
            `
                "Looks like you're off the beaten path! The page you're seeking is playing hide-and-seek. We're on it—hang tight!"
                `,
          ]}
          speed={90}
          cursor={false}
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 1.5 }}
        >
          <Link
            href={"/"}
            className="btn d-flex align-items-center gap-2 p-0 mt-4"
          >
            <Icon icon="arrow-right" className="text-primary-green" size={16} />
            <Scramble className="text-body text-light-green">
              Get back to Home!
            </Scramble>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
