import React, { HTMLAttributes, useMemo, useState } from "react";
import Icon from "./Icon";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface GradientCardProps extends HTMLAttributes<HTMLDivElement> {
  shape?: "square" | "fix" | null;
}

interface ProjectContentProps {
  name?: string;
  description?: string;
  tech?: string[];
  image?: string;
}

interface BoxCardProps extends ProjectContentProps {
  background?: string;
}

interface ProjectCardProps
  extends ProjectContentProps,
    BoxCardProps,
    HTMLAttributes<HTMLDivElement> {
  shape: "vertical" | "horizontal" | "box";
}

export function GradientCard(props: GradientCardProps) {
  const shapeBox = useMemo(() => {
    switch (props.shape) {
      case "square":
        return "card-square";
      default:
        return null;
    }
  }, [props]);

  return (
    <div {...props} className={`gradient-card ${shapeBox} ${props.className}`}>
      <div className={`gradient-card-content`}>{props.children}</div>
    </div>
  );
}

function HorizontalCard(props: ProjectContentProps) {
  const { name, description, tech, image } = props;
  return (
    <>
      <div className="position-absolute bottom-0 start-0 mb-4 ms-4">
        <div className="project-link d-flex justify-content-center align-items-center mb-3">
          <Icon icon="arrow-top-right" size={16} />
        </div>
        <h2 className="text-heading-5 text-light-green">{name}</h2>
        <p className="text-body text-light-green mt-2">{description}</p>
        <div className="d-flex gap-2 mt-3">
          {tech &&
            tech.map((techstack: string, key: number) => (
              <span
                key={key}
                className="project-techstack d-block text-small text-light-green"
              >
                {techstack}
              </span>
            ))}
        </div>
      </div>
      <div className="position-absolute project-image">
        <Image
          src={`/project/${image}`}
          alt="Project Image"
          width={485}
          height={273}
        />
      </div>
    </>
  );
}

function VerticalCard(props: ProjectContentProps) {
  const { name, description, tech, image } = props;
  return (
    <>
      <div className="project-content">
        <div className="position-absolute bottom-0 start-0 mb-4 ms-4">
          <div className="project-link d-flex justify-content-center align-items-center mb-3">
            <Icon icon="arrow-top-right" size={16} />
          </div>
          <h2 className="text-heading-5 text-light-green">{name}</h2>
          <p className="text-body text-light-green mt-2">{description}</p>
          <div className="d-flex gap-2 mt-3">
            {tech &&
              tech.map((techstack: string, key: number) => (
                <span
                  key={key}
                  className="project-techstack d-block text-small text-light-green"
                >
                  {techstack}
                </span>
              ))}
          </div>
        </div>
        <div className="position-absolute project-image">
          <Image
            src={`/project/${image}`}
            alt="Project Image"
            width={180}
            height={360}
          />
          <Image
            src={`/project/${image}`}
            alt="Project Image"
            width={180}
            height={360}
          />
        </div>
      </div>
    </>
  );
}

function BoxCard(props: BoxCardProps) {
  const { name, description, image, background } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  const controls = useAnimation();

  const textVariant = {
    hover: {
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    initial: {
      y: 200,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const imageVariant = {
    hover: {
      height: 50,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    initial: {
      y: 55,
      height: 100,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  function handleMouseEnterControls() {
    controls.start("hover");
  }
  function handleMouseLeaveControls() {
    controls.start("initial");
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center h-100"
        style={{ backgroundColor: background }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="d-flex flex-column align-items-center px-3">
          <motion.div
            variants={imageVariant}
            animate={isHover ? "hover" : "initial"}
            onMouseEnter={handleMouseEnterControls}
            onMouseLeave={handleMouseLeaveControls}
          >
            <Image
              src={`/project/${image}`}
              alt="Project Logo"
              width={200}
              height={100}
              style={{ width: "auto", height: "100%" }}
            />
          </motion.div>
          <motion.div
            variants={textVariant}
            animate={isHover ? "hover" : "initial"}
            onMouseEnter={handleMouseEnterControls}
            onMouseLeave={handleMouseLeaveControls}
          >
            <h2 className="text-heading-5 text-light-green mt-2 text-center">
              {name}
            </h2>
            <p className="text-body text-light-green mt-1 text-center">
              {description}
            </p>
            <div className="project-link d-flex justify-content-center align-items-center mx-auto mt-2">
              <Icon
                icon="arrow-top-right"
                className="social-arrow"
                style={{ color: background }}
                size={16}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export function ProjectCard(props: ProjectCardProps) {
  const { shape } = props;

  const shapeClass = useMemo(() => {
    switch (shape) {
      case "vertical":
        return "card-vertical";
      case "horizontal":
        return "card-horizontal";
      default:
        return "card-box";
    }
  }, [shape]);

  const cardContent = useMemo(() => {
    switch (shape) {
      case "horizontal":
        return <HorizontalCard {...props} />;
      case "vertical":
        return <VerticalCard {...props} />;
      case "box":
        return <BoxCard {...props} />;
      default:
        return props.children;
    }
  }, [props, shape]);

  return (
    <div className={`${shapeClass} project-card`}>
      <div className="project-card-content">{cardContent}</div>
    </div>
  );
}
