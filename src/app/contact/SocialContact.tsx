"use client";

import SocialCard from "@/components/Card/Social";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import { useMobileHook } from "@/hooks/Mobile.hook";
import { SocialListType } from "@/types/Content";
import { socialList } from "@/utils/content";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function SocialContact() {
  const { isMobile } = useMobileHook();

  return (
    <div className="col-span-1">
      <div className="grid grid-cols-2 gap-2 sm:gap-6">
        {socialList.map((item: SocialListType, key: number) => (
          <motion.div
            key={key}
            className="col-span-1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5, delay: key * 0.2 }}
          >
            <SocialCard>
              <Link
                href={item.link}
                target="_blank"
                className="flex flex-col justify-between h-full"
              >
                <div className="w-fit aspect-square rounded-full border border-solid border-green-primary p-2.5 sm:p-3 overflow-hidden relative flex items-center justify-center">
                  <Icon
                    icon={item.icon}
                    size={24}
                    className="text-green-secondary relative z-10"
                  />
                  <div className="w-full h-full aspect-square absolute bottom-0 left-0 right-0 bg-green-primary rounded-full translate-y-full group-hover:translate-y-0 transition duration-300"></div>
                </div>
                <div className="shrink-0">
                  <Typography.Heading
                    level={4}
                    as="h2"
                    className="text-white mb-1 sm:mb-2 translate-y-full group-hover:translate-y-0 transition duration-300"
                    isScrambled
                  >
                    {item.name}
                  </Typography.Heading>
                  <div className="flex items-center gap-2 relative -left-14 -translate-x-full group-hover:translate-x-0 group-hover:left-0 transition duration-300">
                    <Icon
                      icon="arrow-right-linear"
                      size={isMobile ? 12 : 16}
                      className="text-green-secondary shrink-0"
                    />
                    <Typography.Small
                      as="small"
                      className="text-white text-nowrap"
                      isScrambled
                    >
                      {item.detail}
                    </Typography.Small>
                  </div>
                </div>
              </Link>
            </SocialCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
