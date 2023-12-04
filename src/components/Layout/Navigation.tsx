"use client";

import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const menuContainer = useRef<any>(null);
  const [activeProps, setActiveProps] = useState({
    width: 0,
    x: 12,
  });

  const changePage = async (route?: string) => {
    await new Promise((resolve) => setTimeout(resolve, 5));

    const container = document.querySelector(".menu-item.active");
    if (container instanceof HTMLAnchorElement) {
      if (route === "/contact") {
        setActiveProps({
          width: container.getBoundingClientRect().width + 36,
          x:
            container.getBoundingClientRect().x -
            menuContainer.current?.getBoundingClientRect().x -
            6,
        });
      } else {
        setActiveProps({
          width: container.getBoundingClientRect().width + 24,
          x:
            container.getBoundingClientRect().x -
            menuContainer.current?.getBoundingClientRect().x,
        });
      }
      router.push(route!);
    }
  };

  useEffect(() => {
    changePage(pathname);
  }, [pathname]);

  return (
    <div className="layout-header position-fixed start-0 end-0 d-flex flex-column flex-md-row justify-content-center z-3 align-items-center px-sm-4 px-3 py-3">
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="nav d-flex justify-content-between align-items-center mx-auto position-relative"
      >
        <div
          className="menu-selected position-absolute"
          style={{ width: activeProps.width, left: activeProps.x }}
        ></div>
        <div className="nav-menu d-flex position-relative" ref={menuContainer}>
          <Link
            href={"/"}
            className={`d-flex align-items-center menu-item ${
              pathname === "/" && "active"
            }`}
            onClick={() => changePage("/")}
            style={{ gap: 6 }}
          >
            <Icon icon="home" size={24} className="menu-icon d-block" />
            <div className="menu-label text-body text-light-green mb-0">
              Home
            </div>
          </Link>
          <Link
            href={"/project"}
            className={`d-flex align-items-center menu-item ${
              (pathname === "/project" ||
                pathname === "/braille" ||
                pathname === "/braille/play") &&
              "active"
            }`}
            onClick={() => changePage("/project")}
            style={{ gap: 6 }}
          >
            <Icon icon="library" size={24} className="menu-icon d-block" />
            <div className="menu-label text-body text-light-green mb-0">
              Projects
            </div>
          </Link>
          <Link
            href={"experience"}
            className={`d-flex align-items-center menu-item ${
              pathname === "/experience" && "active"
            }`}
            onClick={() => changePage("/experience")}
            style={{ gap: 6 }}
          >
            <Icon icon="rocket" size={24} className="menu-icon d-block" />
            <div className="menu-label text-body text-light-green mb-0">
              Experiences
            </div>
          </Link>
          <Link
            href={"/blog"}
            className={`d-flex align-items-center menu-item ${
              pathname === "/blog" && "active"
            }`}
            onClick={() => changePage("/blog")}
            style={{ gap: 6 }}
          >
            <Icon icon="book" size={24} className="menu-icon d-block" />
            <p className="menu-label mb-0">Blogs</p>
          </Link>
        </div>
        <Link
          href={"/contact"}
          className={`nav-contact menu-item ${
            pathname === "/contact" && "active"
          }`}
          onClick={() => changePage("/contact")}
        >
          <p className="text-body text-light-green">Let&apos;s Talk!</p>
        </Link>
      </motion.div>
    </div>
  );
}
