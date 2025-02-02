import React from "react";
import classNames from "classnames";
import Scramble from "../Scramble";
import type { ParagraphProps } from "@/types/Typography";

export default function Paragraph({
  as = "p",
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

  const Component: React.ElementType = (
    typeof as === "string" ? as : `p`
  ) as React.ElementType;

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
