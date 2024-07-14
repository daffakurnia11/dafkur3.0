import React from "react";
import classNames from "classnames";
import Scramble from "../Scramble";
import type { ParagraphProps } from "@/types/Typography";

export default function Paragraph({
  as: Component = "p",
  children,
  isScrambled,
  ...props
}: ParagraphProps) {
  const renderContent = () => {
    if (isScrambled && typeof children === "string") {
      return <Scramble>{children}</Scramble>;
    }
    return children;
  };

  return (
    <Component
      {...props}
      className={classNames(
        "font-roboto text-sm sm:text-base",
        props.className
      )}
    >
      {renderContent()}
    </Component>
  );
}
