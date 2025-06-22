import React from "react";
import type { Metadata } from "next";
import ProjectDetail from "./_components/ProjectDetail";
import defaultSeoConfig from "@/utils/seo.json";

const pageMetadata = {
  title: "Projects | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Explore web development projects by Daffa Kurnia Fatah showcasing skills in React, Bootstrap, and more.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, Projects, Web Development Projects, Programming Projects, Dafkur.com, IFEM 2022, Petrolida 2022, Crawlerhub, React, Bootstrap, SCSS, Laravel, AntDesign, Full-stack Web Developer, Frontend Developer, Indonesia",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function ProjectDetailPage() {
  return <ProjectDetail />;
}
