"use client";

import React from "react";
import WorkExperiences from "./WorkExperiences";
import OrgExperiences from "./OrgExperiences";
import { ExperiencesProvider } from "../_context/ExperiencesProvider";
import { useGtag } from "@/hooks/useGtag.hook";

export default function Experiences() {
  const { event } = useGtag();

  React.useEffect(() => {
    event("page_view", {
      page_name: "experiences",
    });
  }, [event]);

  return (
    <ExperiencesProvider>
      <WorkExperiences />
      <OrgExperiences />
    </ExperiencesProvider>
  );
}
