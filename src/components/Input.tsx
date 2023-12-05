import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useMemo,
} from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Input(props: InputTextProps) {
  return <input {...props} className={`input ${props.className}`} />;
}

export function InputTextArea(props: TextAreaProps) {
  return (
    <textarea {...props} className={`input ${props.className}`}></textarea>
  );
}
