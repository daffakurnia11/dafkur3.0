import { useEffect, useState } from "react";

export const useMobileHook = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const updateDimensions = () => {
    const screen = window.innerWidth;
    setScreenWidth(screen);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return { isMobile, screenWidth };
};
