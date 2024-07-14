import { useEffect, useState } from "react";

export const useMobileHook = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if the screen width is less than the medium breakpoint
  useEffect(() => {
    setIsMobile(window.innerWidth < 640); // You can adjust the breakpoint as needed
  }, []);

  return { isMobile };
};
