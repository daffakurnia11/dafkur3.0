"use client";

import type { ExperienceDataType } from "@/types/Content";
import { workData } from "@/utils/content";
import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import { organizationData } from "@/utils/experiences";
import { useMobileHook } from "@/hooks/Mobile.hook";
import ExperienceItem from "@/components/pages/ExperienceItem";

export default function ExperiencePage() {
  const { isMobile } = useMobileHook();
  const nextView = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="container mx-auto snap-always snap-start max-w-[300px] sm:max-w-full sm:px-0">
        <div className="flex flex-col items-center justify-start sm:justify-center min-h-[calc(100vh)] pt-24 pb-32 sm:py-24">
          <div className="w-full">
            <TypeAnimation
              className="text-xl text-green-light text-center font-semibold"
              sequence={["Experiences"]}
              speed={60}
              cursor={false}
              wrapper="h1"
            />
            <div className="relative pt-2 flex flex-col items-center gap-4 mt-4 min-h-[604px] sm:min-h-[500px]">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: isMobile ? "calc(100% + 30px)" : "100%" }}
                transition={{ type: "tween", duration: 1 }}
                className="content-none absolute w-[1px] rounded-sm bg-green-primary top-0 -left-4 sm:left-1/2 translate-x-[80%] sm:-translate-x-1/2"
              ></motion.div>
              {workData.map((data: ExperienceDataType, key: number) => (
                <ExperienceItem key={key} index={key} {...data} />
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.2 }}
                className="absolute -bottom-10 sm:-bottom-2 -left-7 sm:left-0 w-full translate-y-0 sm:translate-y-1/2 flex justify-start sm:justify-center"
              >
                <button
                  className="w-fit flex flex-row sm:flex-col items-center justify-center gap-2 group"
                  onClick={() =>
                    nextView.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <div className="w-7 h-7 rounded-full border border-solid border-green-primary bg-green-primary z-10 group-hover:bg-black transition duration-300 flex items-center justify-center">
                    <Icon
                      icon="arrow-down-double-line"
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <Typography.Paragraph className="text-green-light text-center">
                    See Others
                  </Typography.Paragraph>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={nextView}
        className="container mx-auto snap-always snap-start max-w-[300px] sm:max-w-full"
      >
        <div className="flex flex-col items-center justify-start sm:justify-center min-h-[calc(100vh-100px)] sm:min-h-[calc(100vh)] pt-8 pb-20 sm:py-16">
          <div className="w-full">
            <TypeAnimation
              className="text-xl text-green-light text-center font-semibold"
              sequence={["Organizations"]}
              speed={60}
              cursor={false}
              wrapper="h1"
            />
            <div className="relative pt-2 flex flex-col items-center gap-4 mt-4 min-h[604px] sm:min-h-[480px]">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: isMobile ? "calc(100% + 10px)" : "100%" }}
                transition={{ type: "tween", duration: 1 }}
                className="content-none absolute w-[1px] rounded-sm bg-green-primary top-0 -left-4 sm:left-1/2 translate-x-[80%] sm:-translate-x-1/2"
              ></motion.div>
              {organizationData.map((data: ExperienceDataType, key: number) => (
                <ExperienceItem key={key} index={key} {...data} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
