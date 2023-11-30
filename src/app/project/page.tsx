"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { lgLayout, mdLayout, smLayout } from "./projectLayout";
import GridLayout from "./GridLayout";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/Card";

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
              <ProjectCard
                shape="horizontal"
                name="Smart Hydroponic"
                description="Lorem ipsum dolor sit amet."
                tech={["Laravel", "Bootstrap5"]}
                image="smarthydroponic.png"
              />
            </div>
            <div key={`vertical1`}>
              <ProjectCard
                shape="vertical"
                name="IFEM 2022"
                description="Lorem ipsum dolor sit amet."
                tech={["Laravel", "Bootstrap5"]}
                image="ifem.png"
              />
            </div>
            <div key={`box1`}>
              <ProjectCard
                shape="box"
                name="EPW 2022"
                description="Lorem ipsum dolor sit amet."
                image="epw.png"
                background="#84AB4F"
              />
            </div>
            <div key={`box2`}>
              <ProjectCard
                shape="box"
                name="Breakpoint"
                description="Lorem ipsum dolor sit amet."
                image="epw.png"
                background="#0D1726"
              />
            </div>
          </GridLayout>
        </motion.div>
      </Container>
    </section>
  );
}
