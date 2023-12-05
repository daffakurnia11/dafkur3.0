import React, {
  ButtonHTMLAttributes,
  ClassAttributes,
  HTMLAttributes,
  useMemo,
} from "react";
import Icon from "./Icon";
import { motion, useAnimation } from "framer-motion";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ClassAttributes<HTMLButtonElement> {
  buttonType: "primary" | "secondary";
}

interface ArrowButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  isHover: boolean;
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

export function ArrowButton(props: ArrowButtonProps) {
  const controls = useAnimation();
  const variant = {
    hover: {
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    initial: {
      y: 28,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  function handleMouseEnterControls() {
    controls.start("hover");
  }
  function handleMouseLeaveControls() {
    controls.start("initial");
  }

  return (
    <div
      className={`btn btn-arrow position-relative d-flex justify-content-center align-items-center ${props.className}`}
      style={props.style}
    >
      <Icon icon="arrow-top-right" size={16} />
      <motion.div
        className="arrow-bg z-n1"
        variants={variant}
        animate={props.isHover ? "hover" : "initial"}
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={handleMouseLeaveControls}
      ></motion.div>
    </div>
  );
}
