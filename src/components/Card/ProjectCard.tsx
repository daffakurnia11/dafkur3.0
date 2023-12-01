"use client";

import React, { useMemo, useState } from "react";
import type { ProjectCardProps } from "./type";
import { HorizontalCard } from "./HorizontalCard";
import { VerticalCard } from "./VerticalCard";
import { BoxCard } from "./BoxCard";

export function ProjectCard(props: ProjectCardProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { shape } = props;

  const shapeClass = useMemo(() => {
    switch (shape) {
      case "vertical":
        return "card-vertical";
      case "horizontal":
        return "card-horizontal";
      default:
        return "card-box";
    }
  }, [shape]);

  const cardContent = useMemo(() => {
    switch (shape) {
      case "horizontal":
        return <HorizontalCard {...props} isHover={isHover} />;
      case "vertical":
        return <VerticalCard {...props} isHover={isHover} />;
      case "box":
        return <BoxCard {...props} isHover={isHover} />;
      default:
        return props.children;
    }
  }, [props, shape, isHover]);

  return (
    <div
      className={`${shapeClass} project-card`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="project-card-content">{cardContent}</div>
    </div>
  );
}
