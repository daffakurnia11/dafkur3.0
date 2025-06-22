import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import type { ProjectDataType } from "@/types/Content";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useCardGrab } from "@/hooks/useCardGrab.hook";

export default function HorizontalCard(props: ProjectDataType) {
  const {
    handleMouseDownControls,
    handleMouseEnterControls,
    handleMouseLeaveControls,
    handleMouseUpControls,
    isHover,
  } = useCardGrab();

  const linkVariant = {
    hover: {
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    initial: {
      y: -100,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className="w-full h-full bg-gradient-to-r from-green-primary from-50% to-green-primary/15 rounded-[16px] p-[1px] hover:bg-green-primary transition duration-300 select-none"
      onMouseEnter={handleMouseEnterControls}
      onMouseDown={handleMouseDownControls}
      onMouseLeave={handleMouseLeaveControls}
      onMouseUp={handleMouseUpControls}
    >
      <div className="w-full h-full bg-black rounded-[15px] relative overflow-hidden">
        <motion.div
          variants={linkVariant}
          animate={isHover ? "hover" : "initial"}
          className="absolute top-5 right-5 z-10 flex gap-2"
        >
          {props.link && (
            <Link
              href={props.link}
              className="non-draggable w-6 h-6 rounded-full bg-white flex items-center justify-center"
              target="_blank"
            >
              <Icon size={16} icon="link" className="text-dark" />
            </Link>
          )}
          <Link
            href={`/projects/${props.id}`}
            className="non-draggable w-6 h-6 rounded-full bg-white flex items-center justify-center"
          >
            <Icon size={16} icon="arrow-top-right" className="text-dark" />
          </Link>
        </motion.div>
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <Typography.Heading
            isScrambled
            level={5}
            as="h2"
            className="text-white mb-1 mt-4 font-bold"
          >
            {props.name}
          </Typography.Heading>
          <Typography.Small as="p" isScrambled className="text-white">
            {props.description}
          </Typography.Small>
          <div className="flex flex-wrap gap-2 mt-4">
            {props.tech?.map((tech, index) => (
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
        <div className="absolute z-0 w-[350px] rounded-2xl overflow-hidden right-0 -top-5 translate-x-1/4 -rotate-[24deg] opacity-70">
          <Image
            src={`/mockup/${props.id}/laptop.png`}
            alt={`Project ${props.name}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
