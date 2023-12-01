import React from "react";
import Icon from "../Icon";
import Image from "next/image";
import type { ProjectContentProps } from "./type";

export function HorizontalCard(props: ProjectContentProps) {
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
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
}
