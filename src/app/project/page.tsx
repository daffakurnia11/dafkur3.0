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
      <Container className="p-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
        >
          <GridLayout layouts={layouts}>
            <div key={`dafkur2.0`}>
              <ProjectCard
                shape="horizontal"
                name="Dafkur.com 2.0"
                description="My second version of Personal Website."
                tech={["ReactJS", "Bootstrap", "SCSS"]}
                image="dafkur2.png"
              />
            </div>
            <div key={`breakpoint`}>
              <ProjectCard
                shape="box"
                name="Breakpoint"
                description="My Startup Company Profile."
                image="breakpoint.png"
                background="#0C1523"
              />
            </div>
            <div key={`candlecraft`}>
              <ProjectCard
                shape="box"
                name="Candle Craft"
                description="Candle Exporter Product Website"
                image="candlecraft.png"
                background="#05060A"
              />
            </div>
            <div key={`ifem`}>
              <ProjectCard
                shape="vertical"
                name="IFEM 2022"
                description="Biggest Mechanical Engineering ITS Event."
                tech={["Laravel", "Bootstrap", "SCSS"]}
                image="ifem.png"
              />
            </div>
            <div key={`crawlerhub`}>
              <ProjectCard
                shape="horizontal"
                name="Crawlerhub"
                description="Web Crawler by LnData Indonesia"
                tech={["ReactJS", "AntDesign", "SCSS"]}
                image="crawlerhub.png"
              />
            </div>
            <div key={`ecs`}>
              <ProjectCard
                shape="box"
                name="ECS Training"
                description="Python Training by ECS Laboratory"
                image="ecs.png"
                background="#E0D6B6"
              />
            </div>
            <div key={`spe`}>
              <ProjectCard
                shape="box"
                name="SPE ITS"
                description="Society of Petroleum Engineers ITS"
                image="spe.png"
                background="#111840"
              />
            </div>
            <div key={`petrolida`}>
              <ProjectCard
                shape="vertical"
                name="Petrolida 2022"
                description="Biggest Events by SPE ITS"
                tech={["React", "Bootstrap", "Laravel"]}
                image="petrolida.png"
              />
            </div>
            <div key={`ukmexpo`}>
              <ProjectCard
                shape="horizontal"
                name="UKM Expo ITS"
                description="Biggest Event in ITS Community"
                tech={["Laravel", "Bootstrap", "SCSS"]}
                image="ukmexpo.png"
              />
            </div>
            <div key={`epw`}>
              <ProjectCard
                shape="box"
                name="EPW ITS 2022"
                description="Biggest Engineering Physics ITS Event."
                image="epw.png"
                background="#9BB56D"
              />
            </div>
            <div key={`ilits`}>
              <ProjectCard
                shape="box"
                name="Ini Lho ITS! 2021"
                description="Biggest Event in ITS Surabaya"
                image="ilits.png"
                background="#1C2945"
              />
            </div>
          </GridLayout>
        </motion.div>
      </Container>
    </section>
  );
}
