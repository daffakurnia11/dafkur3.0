import Card from "@/components/Card";
import type { ProjectDataType } from "@/types/Content";
import React from "react";

export default function ProjectCard({ data }: { data: ProjectDataType }) {
  switch (data.shape) {
    case "box":
      return <Card.Box {...data} />;
    case "horizontal":
      return <Card.Horizontal {...data} />;
    case "vertical":
      return <Card.Vertical {...data} />;
  }
}
