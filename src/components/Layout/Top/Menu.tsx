import React, { useEffect, useRef, useState } from "react";
import Icon from "../../Icon";
import Typography from "../../Typography";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/useMobile.hook";
import type { MenuItemType } from "@/types/Content";
import menu from "@/data/menu.json";
import { useGtag } from "@/hooks/useGtag.hook";

export default function Menu() {
  const pathname = usePathname();
  const menuContainer = useRef<any>(null);
  const { isMobile } = useMobile();
  const [activeProps, setActiveProps] = useState({
    x: 10,
  });
  const { event } = useGtag();

  const changePage = () => {
    const container = document.getElementById("itemActive");
    if (container instanceof HTMLAnchorElement) {
      setActiveProps({
        x:
          container.getBoundingClientRect().x -
          menuContainer.current?.getBoundingClientRect().x -
          1,
      });
    }
  };

  useEffect(() => {
    changePage();
  }, [pathname]);

  const isActive = (list: string[]) =>
    list.includes(pathname.split("/").splice(0, 2).join("/"));

  const onClick = (tracking: string) => {
    event('button_click', {
      page_name: pathname.split("/")[1] || "home",
      component_name: 'menu',
      button_name: tracking,
    })
  }

  return (
    <div className="fixed w-fit left-1/2 -translate-x-1/2 bottom-0 top-auto sm:top-0 sm:bottom-auto py-4 flex justify-center z-50">
      <motion.div
        className="relative flex flex-row gap-2 bg-black/50 backdrop-blur-sm border border-solid border-green-primary rounded-[50px] py-2 px-2.5 w-fit"
        ref={menuContainer}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div
          className="absolute w-8 h-8 sm:w-10 sm:h-10 content-none bg-green-primary rounded-[50px] transition-all duration-300"
          style={{ left: activeProps.x }}
        ></div>
        {menu.map((item: MenuItemType, index: number) => (
          <Link
            href={item.pathname[0]}
            key={index}
            id={isActive(item.pathname) ? "itemActive" : ""}
            className={classNames(
              "relative flex items-center gap-1.5 p-2 rounded-[30px] group transition duration-300 hover:bg-green-primary/50"
            )}
          >
            <button onClick={() => onClick(item.tracking)} className="w-full h-full">
              <div className="w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center">
                <Icon
                  icon={item.icon}
                  size={isMobile ? 16 : 24}
                  className="text-green-secondary"
                />
              </div>
              <div className="absolute bottom-auto -top-3 sm:-bottom-3 sm:top-auto -translate-y-full sm:translate-y-full left-1/2 -translate-x-1/2 bg-green-primary/50 py-1 sm:py-1.5 px-3 rounded-[30px] transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center">
                <Typography.Paragraph
                  as="span"
                  className={classNames("text-green-secondary")}
                >
                  {item.name}
                </Typography.Paragraph>
              </div>
            </button>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
