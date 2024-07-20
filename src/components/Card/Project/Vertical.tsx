import Typography from "@/components/Typography";
import { useCardGrab } from "@/hooks/CardGrab.hook";
import { ProjectDataType } from "@/types/Content";
import Image from "next/image";
import React from "react";

export default function VerticalCard(props: ProjectDataType) {
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
      className="w-full h-full bg-gradient-to-b from-green-primary from-50% to-green-primary/15 rounded-[16px] p-[1px] hover:bg-green-primary transition duration-300"
      onMouseEnter={handleMouseEnterControls}
      onMouseDown={handleMouseDownControls}
      onMouseLeave={handleMouseLeaveControls}
      onMouseUp={handleMouseUpControls}
    >
      <div className="w-full h-full bg-black rounded-[15px] relative overflow-hidden">
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
        <div className="absolute z-0 overflow-hidden -right-3 -top-5 translate-x-1/2 -rotate-[30deg] opacity-70 flex gap-4">
          <div className="w-[170px] rounded-2xl ">
            <Image
              src={`/project/${props.image}`}
              alt={`Project ${props.name}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="w-[170px] rounded-2xl ">
            <Image
              src={`/project/${props.image}`}
              alt={`Project ${props.name}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
