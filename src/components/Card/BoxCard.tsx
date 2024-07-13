import React, { useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import type { BoxCardProps } from "./type";
import { ArrowButton } from "../Button";
import Scramble from "../Scramble";

export function BoxCard(props: BoxCardProps) {
  const { name, description, logo, background, link } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  const controls = useAnimation();

  const textVariant = {
    hover: {
      y: 30,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    initial: {
      y: 200,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const imageVariant = {
    hover: {
      height: 50,
      y: -50,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    initial: {
      y: 0,
      height: 80,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  function handleMouseEnterControls() {
    controls.start("hover");
  }
  function handleMouseLeaveControls() {
    controls.start("initial");
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center h-100"
        style={background ? { backgroundColor: background } : {}}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center px-3"
          style={{ userSelect: "none" }}
        >
          <motion.div
            variants={imageVariant}
            animate={isHover ? "hover" : "initial"}
            onMouseEnter={handleMouseEnterControls}
            onMouseLeave={handleMouseLeaveControls}
          >
            <Image
              src={`/project/${logo}`}
              alt="Project Logo"
              width={200}
              height={100}
              style={{ width: "auto", height: "100%" }}
            />
          </motion.div>
          <motion.div
            className="position-absolute px-3"
            variants={textVariant}
            animate={isHover ? "hover" : "initial"}
            onMouseEnter={handleMouseEnterControls}
            onMouseLeave={handleMouseLeaveControls}
          >
            <h2 className="mt-2 text-center">
              <Scramble className="text-heading-5 text-light-green">
                {name}
              </Scramble>
            </h2>
            <p className="mt-1 text-center">
              <Scramble className="text-body text-light-green">
                {description}
              </Scramble>
            </p>
            {link && (
              <ArrowButton
                isHover={false}
                style={{
                  backgroundColor: "#fcfefd",
                  color: background || "#426872",
                }}
                className="mx-auto mt-2"
              />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
