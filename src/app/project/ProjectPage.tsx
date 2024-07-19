"use client";

import React, { useEffect, useState } from "react";
import layout from "@/utils/projectLayout.json";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useMobileHook } from "@/hooks/Mobile.hook";
import Typography from "@/components/Typography";
import { projectData } from "@/utils/content";
import { ProjectDataType } from "@/types/Content";
import { motion } from "framer-motion";
import Card from "@/components/Card";

export default function ProjectPage() {
  const { isMobile, screenWidth } = useMobileHook();
  const [gridSize, setGridSize] = useState<"xl" | "lg" | "md" | "sm" | "xs">(
    "xl"
  );
  const gridLayout = {
    lg: layout.layout.lg,
    md: layout.layout.lg,
    sm: layout.layout.md,
    xs: layout.layout.sm,
  };

  useEffect(() => {
    if (screenWidth >= layout.breakpoints.xl) {
      setGridSize("xl");
    } else if (
      screenWidth < layout.breakpoints.xl &&
      screenWidth >= layout.breakpoints.lg
    ) {
      setGridSize("lg");
    } else if (
      screenWidth < layout.breakpoints.lg &&
      screenWidth >= layout.breakpoints.md
    ) {
      setGridSize("md");
    } else if (
      screenWidth < layout.breakpoints.md &&
      screenWidth >= layout.breakpoints.sm
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
      <div className="container mx-auto xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[540px] w-[370px]">
        <ResponsiveGridLayout
          className="mx-auto relative"
          layouts={gridLayout}
          width={layout.width[gridSize]}
          rowHeight={layout.height[gridSize]}
          margin={isMobile ? [12, 12] : [24, 24]}
          breakpoints={layout.breakpoints}
          cols={layout.columns}
          useCSSTransforms={true}
          isResizable={false}
          isDraggable={!isMobile}
          draggableCancel=".non-draggable"
        >
          {projectData.map((data: ProjectDataType, index: number) => (
            <div key={data.key}>
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
          ))}
        </ResponsiveGridLayout>
      </div>
    </section>
  );
}
