import classNames from "classnames";
import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Input({ className, ...props }: InputTextProps) {
  return (
    <input
      {...props}
      className={classNames(
        "bg-black border border-solid border-green-primary py-3 px-4 rounded-2xl text-sm  text-green-secondary placeholder:text-green-primary outline-none transition-all duration-300 focus:border-green-secondary",
        className
      )}
    />
  );
}

export function InputTextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={classNames(
        "bg-black border border-solid border-green-primary py-3 px-4 rounded-2xl text-sm  text-green-secondary placeholder:text-green-primary outline-none transition-all duration-300 focus:border-green-secondary",
        className
      )}
    ></textarea>
  );
}
