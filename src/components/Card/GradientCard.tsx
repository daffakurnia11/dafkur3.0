import React, { useMemo } from "react";
import type { GradientCardProps } from "./type";

export function GradientCard(props: GradientCardProps) {
  const shapeBox = useMemo(() => {
    switch (props.shape) {
      case "square":
        return "card-square";
      default:
        return null;
    }
  }, [props]);

  return (
    <div {...props} className={`gradient-card ${shapeBox} ${props.className}`}>
      <div className={`gradient-card-content`}>{props.children}</div>
    </div>
  );
}
