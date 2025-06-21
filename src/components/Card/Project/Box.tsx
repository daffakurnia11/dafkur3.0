import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import { useCardGrab } from "@/hooks/CardGrab.hook";
import { ProjectDataType } from "@/types/Content";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BoxCard(props: ProjectDataType) {
  const {
    handleMouseDownControls,
    handleMouseEnterControls,
    handleMouseLeaveControls,
    handleMouseUpControls,
    isHover,
  } = useCardGrab();

  const logoVariant = {
    hover: {
      y: -40,
      scale: 0.7,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    initial: {
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const textVariant = {
    hover: {
      y: -40,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    initial: {
      y: 100,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

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
      className="w-full h-full border border-solid border-transparent hover:border-green-primary rounded-2xl transition duration-300 relative overflow-hidden select-none"
      style={{ backgroundColor: props.background! }}
      onMouseEnter={handleMouseEnterControls}
      onMouseDown={handleMouseDownControls}
      onMouseLeave={handleMouseLeaveControls}
      onMouseUp={handleMouseUpControls}
    >
      <motion.div
        variants={logoVariant}
        animate={isHover ? "hover" : "initial"}
        className="w-full h-full flex items-center justify-center"
      >
        <Image
          src={`/mockup/${props.id}/logo.png`}
          alt={props.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "80px" }}
        />
      </motion.div>
      <motion.div
        variants={linkVariant}
        animate={isHover ? "hover" : "initial"}
        className="absolute top-5 right-5 flex gap-2"
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
      <motion.div
        variants={textVariant}
        animate={isHover ? "hover" : "initial"}
        className="absolute bottom-0 left-0 right-0 px-4"
      >
        <Typography.Heading
          level={5}
          as="h2"
          className="text-white text-center font-bold"
          isScrambled
        >
          {props.name}
        </Typography.Heading>
        <Typography.Small as="p" className="text-white text-center" isScrambled>
          {props.description}
        </Typography.Small>
      </motion.div>
    </div>
  );
}
