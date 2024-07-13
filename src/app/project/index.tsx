"use client";

import React from "react";
import { Container } from "react-bootstrap";
import GridLayout from "./GridLayout";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/Card";
import { ProjectDataType, projectData } from "@/utils/projectdata";
import { lgLayout, mdLayout, smLayout } from "@/utils/projectLayout";

export default function ProjectPage() {
  const layouts = { lg: lgLayout, md: lgLayout, sm: mdLayout, xs: smLayout };

  return (
    <section className="project grid-layout d-flex justify-content-center align-items-center">
      <Container className="p-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
        >
          <GridLayout layouts={layouts}>
            {projectData.map((data: ProjectDataType) => (
              <div key={data.key}>
                <ProjectCard
                  shape={data.shape}
                  name={data.name}
                  description={data.description}
                  tech={data.tech}
                  image={data.image}
                  logo={data.logo}
                  background={data.background}
                  link={data.link}
                />
              </div>
            ))}
          </GridLayout>
        </motion.div>
      </Container>
    </section>
  );
}
