import React, { useMemo } from "react";
import type { ProjectCardProps } from "./type";
import { HorizontalCard } from "./HorizontalCard";
import { VerticalCard } from "./VerticalCard";
import { BoxCard } from "./BoxCard";

export function ProjectCard(props: ProjectCardProps) {
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
        return <HorizontalCard {...props} />;
      case "vertical":
        return <VerticalCard {...props} />;
      case "box":
        return <BoxCard {...props} />;
      default:
        return props.children;
    }
  }, [props, shape]);

  return (
    <div className={`${shapeClass} project-card`}>
      <div className="project-card-content">{cardContent}</div>
    </div>
  );
}
