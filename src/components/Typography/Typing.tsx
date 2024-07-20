import React from "react";
import { TypeAnimation } from "react-type-animation";
import Typography from ".";

type TypeAnimationProps = React.ComponentProps<typeof TypeAnimation>;

interface Props extends TypeAnimationProps {}

export default function Typing(props: Props) {
  return (
    <div className="relative">
      <TypeAnimation
        {...props}
        className="text-sm sm:text-base text-green-light absolute"
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
