import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

export default function AboutContribution() {
  return (
    <>
      <TypeAnimation
        className="text-green-primary text-base mb-1"
        sequence={["My contributions"]}
        speed={80}
        cursor={false}
        wrapper="h2"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
        className="text-green-secondary"
      >
        <GitHubCalendar
          colorScheme="dark"
          username="daffakurnia11"
          theme={{
            dark: ["#2C3333", "#395B64", "#A5C9CA", "#E7F6F2", "#FCFEFD"],
          }}
          blockSize={9}
          fontSize={10}
        />
      </motion.div>
    </>
  );
}
