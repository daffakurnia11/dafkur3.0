import React from "react";
import type { Metadata } from "next";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
  title: "My Project - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function Project() {
  return <ProjectPage />;
}
