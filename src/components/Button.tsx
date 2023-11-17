import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  return (
    <button {...props} className={`btn ${props.className}`}>
      {props.children}
    </button>
  );
}
