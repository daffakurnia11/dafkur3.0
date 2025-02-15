import React from "react";
import type { Metadata } from "next";
import ExperiencePage from "./ExperiencePage";
import defaultSeoConfig from "@/utils/seo.json";

const pageMetadata = {
  title: "Experience | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Explore the professional experiences of Daffa Kurnia Fatah, Full-stack Web Developer.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, Experiences, Professional Experience, Organizational Experience, Full-stack Web Developer, Front-end Developer, Itsavirus, LnData Indonesia, Unilever Indonesia, Bangkit Academy, Breakpoint Indonesia, SMAN 1 Sidoarjo, Coordinator of Laboratory Assistant, Coordinator of Web Development, IT Manager, Head of Web Development, Web Development, East Java, Indonesia",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function Experience() {
  return <ExperiencePage />;
}
