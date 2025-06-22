import type { ProjectDataType } from "@/types/Content";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";
import Typography from "@/components/Typography";
import Icon from "@/components/Icon";

export default function ProjectDescription({
  data,
}: {
  data: ProjectDataType;
}) {
  return (
    <div className="mb-5">
      <div className="flex items-start gap-2">
        <TypeAnimation
          sequence={[data.name]}
          className="font-bold text-2xl text-white mb-3"
          speed={50}
          wrapper="h1"
          cursor={false}
        />
        {data.link && (
          <Link
            href={data.link}
            target="_blank"
            className="block -translate-y-1/4"
          >
            <Icon
              size={16}
              icon="arrow-top-right"
              className="text-green-light"
            />
          </Link>
        )}
      </div>
      {data.brief.map((brief: string, index: number) => (
        <div key={index} className="mb-2">
          <Typography.Typing
            sequence={[brief]}
            speed={99}
            wrapper="p"
            cursor={false}
          />
        </div>
      ))}
      <div className="mt-10">
        <TypeAnimation
          className="text-green-primary text-base"
          sequence={["What tech stack I used"]}
          speed={80}
          cursor={false}
        />
        <div className="flex flex-wrap gap-2 mt-1">
          {data.tech?.map((tech, index) => (
            <div
              key={index}
              className="py-1.5 px-4 bg-green-dark rounded-[32px] flex"
            >
              <Typography.Small className="text-white" isScrambled>
                {tech}
              </Typography.Small>
            </div>
          ))}
        </div>
      </div>
      {data.repo && (
        <div className="mt-10">
          <TypeAnimation
            className="text-green-primary text-base"
            sequence={["Access the repository"]}
            speed={80}
            cursor={false}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.3, delay: 0.3 }}
          >
            <Link href={data.repo} target="_blank" className="block mt-1 w-fit">
              <Icon icon="github" size={24} className="text-white" />
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
}
