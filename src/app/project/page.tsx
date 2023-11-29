"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { lgLayout, mdLayout, smLayout } from "./projectLayout";
import GridLayout from "./GridLayout";
import { motion } from "framer-motion";

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
            <div className="project-card" key={`vertical1`}>
              <div>Vertical 1</div>
            </div>
            <div className="project-card" key={`vertical2`}>
              <div>Vertical 2</div>
            </div>
            <div className="project-card" key={`horizontal1`}>
              <div>Horizontal 1</div>
            </div>
            <div className="project-card" key={`horizontal2`}>
              <div>Horizontal 2</div>
            </div>
            <div className="project-card" key={`box1`}>
              <div>Box 1</div>
            </div>
            <div className="project-card" key={`box2`}>
              <div>Box 2</div>
            </div>
            <div className="project-card" key={`box3`}>
              <div>Box 3</div>
            </div>
            <div className="project-card" key={`box4`}>
              <div>Box 4</div>
            </div>
          </GridLayout>
        </motion.div>
      </Container>
    </section>
  );
}
