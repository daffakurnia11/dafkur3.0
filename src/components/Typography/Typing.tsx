import React from "react";
import { TypeAnimation } from "react-type-animation";
import Typography from ".";
import classNames from "classnames";

type TypeAnimationProps = React.ComponentProps<typeof TypeAnimation>;

interface Props extends TypeAnimationProps {
  className?: string;
}

export default function Typing(props: Props) {
  return (
    <div className="relative">
      <TypeAnimation
        {...props}
        className={classNames(
          "text-sm sm:text-base text-green-light absolute",
          props.className
        )}
        wrapper="p"
      />
      <div className="opacity-0" aria-hidden={true}>
        <Typography.Paragraph>
          {props.sequence.find((sequence: any) => typeof sequence === "string")}
        </Typography.Paragraph>
      </div>
    </div>
  );
}
