import { useAnimation } from "framer-motion";
import { useState } from "react";

export const useCardGrab = () => {
  const controls = useAnimation();
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  function handleMouseDownControls() {
    setIsHover(true);
    setIsMouseDown(true);
    controls.start("hover");
  }

  function handleMouseEnterControls() {
    setIsHover(true);
    controls.start("hover");
  }

  function handleMouseLeaveControls() {
    if (!isMouseDown) {
      setIsHover(false);
      controls.start("initial");
    } else {
      setIsMouseDown(false);
    }
  }

  function handleMouseUpControls() {
    setIsMouseDown(false);
  }
  
  return {
    handleMouseDownControls,
    handleMouseEnterControls,
    handleMouseLeaveControls,
    handleMouseUpControls,
    isHover,
  };
};