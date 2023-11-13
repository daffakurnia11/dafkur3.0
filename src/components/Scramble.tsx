"use client";

import React from "react";
import { useScramble } from "use-scramble";

interface Props {
  children: string | undefined;
}

export default function Scramble(props: Props) {
  const { ref, replay } = useScramble({
    text: props.children,
  });

  return (
    <span ref={ref} onMouseOver={replay} onFocus={replay}>
      {props.children}
    </span>
  );
}
