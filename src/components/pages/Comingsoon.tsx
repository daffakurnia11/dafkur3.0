"use client";

import Icon from "@/components/Icon";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Scramble from "@/components/Scramble";
import { Container } from "react-bootstrap";

export default function Comingsoon() {
  return (
    <section className="notfound text-layout d-flex justify-content-center align-items-center">
      <Container>
        <TypeAnimation
          className="text-heading-4"
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
          className="d-block notfound-desc text-body text-light-green mt-3"
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
          <Link
            href={"/"}
            className="btn d-flex align-items-center gap-2 p-0 mt-4"
          >
            <Icon icon="arrow-right" className="text-primary-green" size={16} />
            <Scramble className="text-body text-light-green text-decoration-underline">
              Get back to Home!
            </Scramble>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
