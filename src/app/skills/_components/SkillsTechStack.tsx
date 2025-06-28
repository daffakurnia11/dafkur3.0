import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";

import skills from "@/data/skills.json";
import { useGtag } from "@/hooks/useGtag.hook";

export default function SkillsTechStack() {
  const { event } = useGtag();

  const tracking = (tracking: string) => {
    event("button_hover", {
      page_name: "skills",
      component_name: "skills_tech_stack",
      button_name: `skills_tech_stack_${tracking}`,
    });
  };
  
  return (
    <>
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
                  onMouseEnter={() => tracking(skill.tracking)}
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
    </>
  );
}
