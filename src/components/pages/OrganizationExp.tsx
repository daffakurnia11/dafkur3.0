"use client";

import React from "react";
import { ExperienceDataType, organizationData } from "@/utils/experiences";
import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function OrganizationExp() {
  return (
    <div className="mt-sm-0 pt-5 experience-section d-flex justify-content-center align-items-center">
      <Container>
        <TypeAnimation
          className="text-heading-4 text-light-green text-center"
          sequence={["Organizations"]}
          speed={60}
          cursor={false}
          wrapper="h1"
        />
        <div className="position-relative experience-content organizations mx-auto mt-2 pb-3 pt-2">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            className="vertical-line position-absolute translate-middle-x"
          ></motion.div>
          {organizationData.map((data: ExperienceDataType, key: number) => (
            <div
              key={key}
              className={`d-flex flex-column flex-sm-row gap-2 gap-sm-4 align-items-sm-center ps-3 ps-sm-0 position-relative ${
                key !== 0 && "mt-4 mt-sm-3"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.5 + key * 0.2 }}
                className="dots-line position-absolute"
              ></motion.div>
              <TypeAnimation
                className="flex-sm-fill w-100 text-small text-secondary-green d-block text-start text-sm-end"
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
                  className="text-light-green"
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
        </div>
      </Container>
    </div>
  );
}
