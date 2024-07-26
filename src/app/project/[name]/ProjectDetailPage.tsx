"use client";

import React from "react";
import projects from "@/data/projects.json";
import { useParams } from "next/navigation";
import { ProjectDataType } from "@/types/Content";
import ProjectMockup from "@/components/pages/ProjectMockup";
import ProjectDescription from "@/components/pages/ProjectDescription";

export default function ProjectDetailPage() {
  const params = useParams();
  const data: ProjectDataType | undefined = (
    projects.data as ProjectDataType[]
  ).find((item) => item.id === params.name);

  return (
    data && (
      <div className="pt-[100px] pb-[80px] min-h-dvh flex flex-col justify-center items-center overflow-x-hidden">
        <div className="flex-1 container mx-auto grid grid-cols-2 gap-4 items-center px-10">
          <div className="col-span-2 lg:col-span-1">
            <ProjectDescription data={data} />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <ProjectMockup data={data} />
          </div>
        </div>
      </div>
    )
  );
}
