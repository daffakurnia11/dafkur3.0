"use client";

import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import { ExperienceDataType, workData } from "@/utils/experiences";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

export default function WorkExp() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="experience-section d-flex justify-content-center align-items-center">
      <Container>
        <TypeAnimation
          className="text-heading-4 text-light-green text-center"
          sequence={["Work Experiences"]}
          speed={60}
          cursor={false}
          wrapper="h1"
        />
        <div className="position-relative experience-content works pb-3 pt-2">
          <motion.div
            initial={{ height: 0 }}
            animate={
              screenWidth > 576
                ? { height: "calc(100% - 72px)" }
                : { height: "calc(100% - 48px" }
            }
            transition={{ duration: 1 }}
            className="vertical-line position-absolute translate-middle-x"
          ></motion.div>
          {workData.map((data: ExperienceDataType, key: number) => (
            <div
              key={key}
              className={`d-flex flex-column flex-sm-row gap-0 gap-sm-4 align-items-sm-center ps-3 ps-sm-0 position-relative ${
                key !== 0 && "mt-4 mt-sm-3"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.5 + key * 0.2 }}
                className="dots-line position-absolute"
              ></motion.div>
              <TypeAnimation
                className="flex-sm-fill w-100 text-small text-secondary-green d-block text-start text-sm-end mb-2 mb-sm-0"
                sequence={[
                  key * 500,
                  `${data.start} - ${data.end ?? "Present"}`,
                ]}
                speed={60}
                cursor={false}
                wrapper="span"
              />
              <div className="flex-sm-fill w-100">
                <TypeAnimation
                  className="text-light-green mb-2 mb-sm-0"
                  sequence={[key * 500, `${data.position}`]}
                  speed={60}
                  cursor={false}
                  wrapper="p"
                />
                <TypeAnimation
                  className="d-block text-small text-secondary-green"
                  sequence={[key * 500, `${data.company}`]}
                  speed={60}
                  cursor={false}
                  wrapper="span"
                />
                <TypeAnimation
                  className="d-block text-small text-secondary-green"
                  sequence={[key * 500, `${data.place}`]}
                  speed={60}
                  cursor={false}
                  wrapper="span"
                />
              </div>
            </div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 3 }}
            className="experience-arrow d-flex align-items-center gap-3 gap-sm-0 mt-3 flex-row flex-sm-column"
          >
            <div className="arrow-down-line d-flex justify-content-center align-items-center z-1 position-relative">
              <Icon icon="arrow-down-double" size={20} />
            </div>
            <p className="text-body text-light-green text-center fw-bold">
              See Others
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
