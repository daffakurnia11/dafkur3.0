"use client";

import React, { HTMLAttributes, useEffect, useState } from "react";
import { Layouts, Responsive as ResponsiveGridLayout } from "react-grid-layout";

import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  layouts: Layouts;
}

export default function GridLayout(props: Props) {
  const [layoutWidth, setLayoutWidth] = useState(0);
  const updateDimensions = () => {
    let screen = window.innerWidth;

    if (screen >= 1200) {
      setLayoutWidth(246 * 4 + 24 * 5);
    } else if (screen < 1200 && screen >= 992) {
      setLayoutWidth(246 * 3 + 24 * 4);
    } else {
      setLayoutWidth(246 * 2 + 24 * 3);
    }
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <ResponsiveGridLayout
      className="mx-auto layout"
      layouts={props.layouts}
      breakpoints={{ lg: 1200, md: 992, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 }}
      width={layoutWidth}
      rowHeight={225}
      margin={[24, 24]}
      useCSSTransforms={true}
      isResizable={false}
    >
      {props.children}
    </ResponsiveGridLayout>
  );
}
