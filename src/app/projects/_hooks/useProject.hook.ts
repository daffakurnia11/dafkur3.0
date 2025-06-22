import projects from "@/data/projects.json";
import { useMobile } from "@/hooks/useMobile.hook";
import { useEffect, useState } from "react";

export const useProject = () => {
  const { screenWidth } = useMobile();
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

  return { gridLayout, gridSize };
};
