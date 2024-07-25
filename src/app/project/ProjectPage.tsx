"use client";

import React, { useEffect, useState } from "react";
import projects from "@/data/projects.json";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useMobileHook } from "@/hooks/Mobile.hook";
import { ProjectDataType } from "@/types/Content";
import { motion } from "framer-motion";
import Card from "@/components/Card";

export default function ProjectPage() {
  const { isMobile, screenWidth } = useMobileHook();
  const [gridSize, setGridSize] = useState<"xl" | "lg" | "md" | "sm" | "xs">(
    "xl"
  );
  const gridLayout = {
    lg: projects.layout.lg,
    md: projects.layout.lg,
    sm: projects.layout.md,
    xs: projects.layout.sm,
  };

  useEffect(() => {
    if (screenWidth >= projects.breakpoints.xl) {
      setGridSize("xl");
    } else if (
      screenWidth < projects.breakpoints.xl &&
      screenWidth >= projects.breakpoints.lg
    ) {
      setGridSize("lg");
    } else if (
      screenWidth < projects.breakpoints.lg &&
      screenWidth >= projects.breakpoints.md
    ) {
      setGridSize("md");
    } else if (
      screenWidth < projects.breakpoints.md &&
      screenWidth >= projects.breakpoints.sm
    ) {
      setGridSize("sm");
    } else {
      setGridSize("xs");
    }
  }, [screenWidth]);

  const ProjectCard = (data: ProjectDataType) => {
    switch (data.shape) {
      case "box":
        return <Card.Box {...data} />;
      case "horizontal":
        return <Card.Horizontal {...data} />;
      case "vertical":
        return <Card.Vertical {...data} />;
    }
  };

  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh flex justify-center items-center">
      <div className="container mx-auto xl:w-[1024px] lg:w-[1024px] md:w-[768px] sm:w-[540px] w-[370px] pb-8">
        <ResponsiveGridLayout
          className="mx-auto relative"
          layouts={gridLayout}
          width={projects.width[gridSize]}
          rowHeight={projects.height[gridSize]}
          margin={isMobile ? [12, 12] : [24, 24]}
          breakpoints={projects.breakpoints}
          cols={projects.columns}
          useCSSTransforms={true}
          isResizable={false}
          isDraggable={!isMobile}
          draggableCancel=".non-draggable"
        >
          {(projects.data as ProjectDataType[]).map(
            (data: ProjectDataType, index: number) => (
              <div key={data.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + 0.2 * index,
                    type: "tween",
                  }}
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                >
                  <ProjectCard {...data} />
                </motion.div>
              </div>
            )
          )}
        </ResponsiveGridLayout>
      </div>
    </section>
  );
}
