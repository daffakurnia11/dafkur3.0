import React from "react";
import Image from "next/image";
import type { ProjectContentProps } from "./type";
import { ArrowButton } from "../Button";

export function VerticalCard(props: ProjectContentProps) {
  const { isHover, name, description, tech, image, link } = props;
  return (
    <>
      <div className="project-content">
        <div className="position-absolute bottom-0 start-0 mb-4 mx-4">
          {link && <ArrowButton isHover={isHover!} className="mb-2" />}
          <h2 className="text-heading-5 text-light-green">{name}</h2>
          <p className="text-body text-light-green mt-2">{description}</p>
          <div className="d-flex flex-wrap gap-2 mt-3">
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
            width={400}
            height={800}
          />
          <Image
            src={`/project/${image}`}
            alt="Project Image"
            width={400}
            height={800}
          />
        </div>
      </div>
    </>
  );
}
