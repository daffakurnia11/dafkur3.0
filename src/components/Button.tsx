import React, { ButtonHTMLAttributes, ClassAttributes, useMemo } from "react";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ClassAttributes<HTMLButtonElement> {
  buttonType: "primary" | "secondary";
}

export default function Button(props: Props) {
  const type = useMemo(() => {
    switch (props.buttonType) {
      case "secondary":
        return "btn-secondary";
      default:
        return "btn-primary";
    }
  }, [props]);

  return (
    <button {...props} className={`btn ${type} ${props.className}`}>
      {props.children}
    </button>
  );
}
