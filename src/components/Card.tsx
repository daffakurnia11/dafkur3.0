import React, { HTMLAttributes, useMemo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  shape?: "square" | "fix" | null;
}

export function GradientCard(props: Props) {
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
