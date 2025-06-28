import type { ExperienceDataType } from "@/types/Content";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/useMobile.hook";
import ExperienceItem from "./ExperienceItem";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import { useExperiencesContext } from "../_context/ExperiencesProvider";

import works from "@/data/works.json";
import { useGtag } from "@/hooks/useGtag.hook";

export default function WorkExperiences() {
  const { isMobile } = useMobile();
  const { nextView } = useExperiencesContext();
  const { event } = useGtag();

  const tracking = () => {
    event("button_click", {
      page_name: "experiences",
      component_name: "work_experiences",
      button_name: "see_others_button",
    });
  };

  return (
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
          <div className="relative pt-2 flex flex-col items-center gap-4 mt-4 min-h-[706px] sm:min-h-[570px]">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isMobile ? "calc(100% + 30px)" : "100%" }}
              transition={{ type: "tween", duration: 1 }}
              className="content-none absolute w-[1px] rounded-sm bg-green-primary top-0 -left-4 sm:left-1/2 translate-x-[80%] sm:-translate-x-1/2"
            ></motion.div>
            {works.map((data: ExperienceDataType, key: number) => (
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
                onClick={() => {
                  tracking();
                  nextView.current?.scrollIntoView({ behavior: "smooth" });
                }}
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
  );
}
