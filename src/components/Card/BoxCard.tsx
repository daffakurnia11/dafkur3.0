import React, { useState } from "react";
import Icon from "../Icon";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import type { BoxCardProps } from "./type";

export function BoxCard(props: BoxCardProps) {
  const { name, description, logo, background } = props;
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
        <div className="d-flex flex-column align-items-center justify-content-center px-3">
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
            className="position-absolute"
            variants={textVariant}
            animate={isHover ? "hover" : "initial"}
            onMouseEnter={handleMouseEnterControls}
            onMouseLeave={handleMouseLeaveControls}
          >
            <h2 className="text-heading-5 text-light-green mt-2 text-center">
              {name}
            </h2>
            <p className="text-body text-light-green mt-1 text-center">
              {description}
            </p>
            <div className="project-link d-flex justify-content-center align-items-center mx-auto mt-2">
              <Icon
                icon="arrow-top-right"
                className="social-arrow"
                style={background ? { color: background } : {}}
                size={16}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
