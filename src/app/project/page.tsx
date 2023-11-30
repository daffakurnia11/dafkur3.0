"use client";

import React, { HTMLAttributes, useMemo } from "react";
import { Container } from "react-bootstrap";
import { lgLayout, mdLayout, smLayout } from "./projectLayout";
import GridLayout from "./GridLayout";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {
  shape: "vertical" | "horizontal" | "box";
}

const ProjectCard = (props: Props) => {
  const shapeClass = useMemo(() => {
    switch (props.shape) {
      case "vertical":
        return "card-vertical";
      case "horizontal":
        return "card-horizontal";
      default:
        return "card-box";
    }
  }, [props.shape]);

  return (
    <div className={`${shapeClass} project-card`}>
      <div className="project-card-content p-4">{props.children}</div>
    </div>
  );
};

export default function Project() {
  const layouts = { lg: lgLayout, md: lgLayout, sm: mdLayout, xs: smLayout };

  return (
    <section className="project grid-layout d-flex justify-content-center align-items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
        >
          <GridLayout layouts={layouts}>
            <div key={`horizontal1`}>
              <ProjectCard shape="horizontal">
                <div className="position-absolute bottom-0 start-0 mb-4 ms-4">
                  <div className="project-link d-flex justify-content-center align-items-center mb-3">
                    <Icon
                      icon="arrow-top-right"
                      className="social-arrow"
                      size={16}
                    />
                  </div>
                  <h2 className="text-heading-5 text-light-green">
                    Smart Hydroponic
                  </h2>
                  <p className="text-body text-light-green mt-2">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className="d-flex gap-2 mt-3">
                    <span className="project-techstack d-block text-small text-light-green">
                      Laravel
                    </span>
                    <span className="project-techstack d-block text-small text-light-green">
                      Bootstrap5
                    </span>
                  </div>
                </div>
                <div className="position-absolute project-image">
                  <Image
                    src={"/project/smarthydroponic.png"}
                    alt="Project Image"
                    width={485}
                    height={273}
                  />
                </div>
              </ProjectCard>
            </div>
            <div key={`horizontal2`}>
              <ProjectCard shape="horizontal">horizontal 2</ProjectCard>
            </div>
            <div key={`vertical1`}>
              <ProjectCard shape="vertical">
                <div className="project-content">
                  <div className="position-absolute bottom-0 start-0 mb-4 ms-4">
                    <div className="project-link d-flex justify-content-center align-items-center mb-3">
                      <Icon
                        icon="arrow-top-right"
                        className="social-arrow"
                        size={16}
                      />
                    </div>
                    <h2 className="text-heading-5 text-light-green">
                      IFEM 2022
                    </h2>
                    <p className="text-body text-light-green mt-2">
                      Lorem ipsum dolor sit amet.
                    </p>
                    <div className="d-flex gap-2 mt-3">
                      <span className="project-techstack d-block text-small text-light-green">
                        Laravel
                      </span>
                      <span className="project-techstack d-block text-small text-light-green">
                        Bootstrap5
                      </span>
                    </div>
                  </div>
                  <div className="position-absolute project-image">
                    <Image
                      src={"/project/ifem.png"}
                      alt="Project Image"
                      width={180}
                      height={360}
                    />
                    <Image
                      src={"/project/ifem.png"}
                      alt="Project Image"
                      width={180}
                      height={360}
                    />
                  </div>
                </div>
              </ProjectCard>
            </div>
            <div key={`vertical2`}>
              <ProjectCard shape="vertical">vertical 2</ProjectCard>
            </div>
            <div key={`box1`}>
              <ProjectCard shape="box">Box 1</ProjectCard>
            </div>
            <div key={`box2`}>
              <ProjectCard shape="box">Box 2</ProjectCard>
            </div>
            <div key={`box3`}>
              <ProjectCard shape="box">Box 3</ProjectCard>
            </div>
            <div key={`box4`}>
              <ProjectCard shape="box">Box 4</ProjectCard>
            </div>
          </GridLayout>
        </motion.div>
      </Container>
    </section>
  );
}
