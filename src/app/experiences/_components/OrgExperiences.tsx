import type { ExperienceDataType } from "@/types/Content";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/useMobile.hook";
import ExperienceItem from "./ExperienceItem";
import { useExperiencesContext } from "../_context/ExperiencesProvider";

import organizations from "@/data/organizations.json";

export default function OrgExperiences() {
  const { isMobile } = useMobile();
  const { nextView } = useExperiencesContext();

  return (
    <section
      ref={nextView}
      className="container mx-auto snap-always snap-start max-w-[300px] sm:max-w-full pb-8"
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
            {organizations.map((data: ExperienceDataType, key: number) => (
              <ExperienceItem key={key} index={key} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
