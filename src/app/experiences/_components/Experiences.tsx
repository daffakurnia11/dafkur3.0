"use client";

import React from "react";
import WorkExperiences from "./WorkExperiences";
import OrgExperiences from "./OrgExperiences";
import { ExperiencesProvider } from "../_context/ExperiencesProvider";

export default function Experiences() {
  return (
    <ExperiencesProvider>
      <WorkExperiences />
      <OrgExperiences />
    </ExperiencesProvider>
  );
}
