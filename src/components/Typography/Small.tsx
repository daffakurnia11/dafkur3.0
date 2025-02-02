import React from "react";
import classNames from "classnames";
import Scramble from "../Scramble";
import type { SmallProps } from "@/types/Typography";

export default function Small({
  as = "small",
  children,
  isScrambled,
  ...props
}: SmallProps) {
  const renderContent = () => {
    if (isScrambled && typeof children === "string") {
      return <Scramble>{children}</Scramble>;
    }
    return children;
  };

  const Component: React.ElementType = (
    typeof as === "string" ? as : `small`
  ) as React.ElementType;

  return (
    <Component
      {...props}
      className={classNames("font-roboto text-xs sm:text-sm", props.className)}
    >
      {renderContent()}
    </Component>
  );
}
