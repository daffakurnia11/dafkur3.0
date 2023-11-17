import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  return <input {...props} className={`input ${props.className}`} />;
}
