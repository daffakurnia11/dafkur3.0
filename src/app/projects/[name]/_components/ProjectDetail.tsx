"use client";

import React from "react";
import ProjectDescription from "./ProjectDescription";
import ProjectMockup from "./ProjectMockup";
import { useProjectDetail } from "../_hooks/useProjectDetail.hook";
import { useGtag } from "@/hooks/useGtag.hook";

export default function ProjectDetail() {
  const { data } = useProjectDetail();
  const { event } = useGtag();

  React.useEffect(() => {
    event("page_view", {
      page_name: "project_detail",
      project_name: data?.name || "unknown",
    });
  }, [event, data]);

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
