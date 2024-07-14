import React from "react";
import classNames from "classnames";
import Scramble from "../Scramble";
import { HeadingProps } from "@/types/Typography";

export default function Heading({
  as = "h1",
  level = 1,
  children,
  isScrambled,
  ...props
}: HeadingProps) {
  const sizeLevel = {
    1: "text-3xl sm:text-4xl",
    2: "text-2xl sm:text-3xl",
    3: "text-xl sm:text-2xl",
    4: "text-lg sm:text-xl",
    5: "text-base sm:text-lg",
  };

  const sizeClass = sizeLevel[level];

  const Component = as || `h${level}`;

  const renderContent = () => {
    if (isScrambled && typeof children === "string") {
      return <Scramble>{children}</Scramble>;
    }
    return children;
  };

  return (
    <Component
      {...props}
      className={classNames("font-roboto", sizeClass, props.className)}
    >
      {renderContent()}
    </Component>
  );
}
