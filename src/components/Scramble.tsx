"use client";

import React, { HTMLAttributes } from "react";
import { useScramble } from "use-scramble";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: string | undefined;
}

export default function Scramble(props: Props) {
  const { ref, replay } = useScramble({
    text: props.children,
    speed: 0.5,
  });

  return (
    <span {...props} ref={ref} onMouseOver={replay} onFocus={replay}>
      {props.children}
    </span>
  );
}
