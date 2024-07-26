"use client";

import SkillsEditor from "@/components/pages/SkillsEditor";
import Typography from "@/components/Typography";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import Link from "next/link";
import skills from "@/data/skills.json";

export default function SkillsPage() {
  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh flex justify-center items-center">
      <div className="container mx-auto xl-max-w-[1024px] px-5 flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <TypeAnimation
            className="text-xl text-green-light text-center font-semibold"
            sequence={["Skills"]}
            speed={60}
            cursor={false}
            wrapper="h1"
          />
          <div className="w-full mx-auto text-center">
            <Typography.Typing
              sequence={[
                "Just a few of my skills using some programming lang that I've learned and mastered.",
              ]}
              className="text-center"
              cursor={false}
              speed={90}
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
            >
              <div className="mt-5 max-w-[370px] sm:max-w-[500px] mx-auto bg-gradient-to-b from-green-primary from-50% to-green-primary/15 hover:bg-green-primary rounded-[16px] p-[1px] aspect-[3/2] sm:aspect-[5/3] transition duration-300">
                <div className="w-full h-full flex flex-col gap-2 bg-black rounded-[15px] pt-2 pb-3 px-3">
                  <SkillsEditor />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="h-7 mt-5">
            <TypeAnimation
              className="text-xl text-green-light text-center font-semibold"
              sequence={[500, "Tech Stacks"]}
              speed={60}
              cursor={false}
              wrapper="h2"
            />
          </div>
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-8 justify-center items-center">
              {skills.map((skill: any, key: number) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.3,
                    delay: 0.7 + key * 0.1,
                  }}
                  key={key}
                  className="col-span-1 flex justify-center"
                >
                  <Link
                    href={skill.link}
                    target="_blank"
                    className="group relative"
                  >
                    <Icon
                      icon={skill.icon}
                      size={40}
                      className="text-green-secondary group-hover:text-white transition duration-300"
                    />
                    <div className="absolute bottom-auto -top-3 sm:-bottom-3 sm:top-auto -translate-y-full sm:translate-y-full left-1/2 -translate-x-1/2 -z-[1] group-hover:z-20 bg-green-primary/50 py-1 sm:py-1.5 px-3 rounded-[30px] transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center backdrop-blur-sm w-fit">
                      <Typography.Paragraph
                        as="span"
                        className="text-green-secondary text-nowrap"
                      >
                        {skill.name}
                      </Typography.Paragraph>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
