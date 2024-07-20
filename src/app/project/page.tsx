import React from "react";
import type { Metadata } from "next";
import ProjectPage from "./ProjectPage";
import Seo from "@/components/Seo";

const pageMetadata = {
  title: "Projects | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Explore the web development and programming projects by Daffa Kurnia Fatah. Discover his work on Dafkur.com, IFEM 2022, Petrolida 2022, Crawlerhub, and many other projects showcasing his skills in React, Bootstrap, SCSS, Laravel, and more.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, Projects, Web Development Projects, Programming Projects, Dafkur.com, IFEM 2022, Petrolida 2022, Crawlerhub, React, Bootstrap, SCSS, Laravel, AntDesign, Full-stack Web Developer, Frontend Developer, Indonesia",
};

export const metadata: Metadata = pageMetadata;

export default function Project() {
  return (
    <>
      <Seo
        title={pageMetadata.title}
        description={pageMetadata.description}
        additionalMetaTags={[
          {
            name: "keywords",
            content: pageMetadata.keywords,
          },
          {
            name: "author",
            content: pageMetadata.authors.name,
          },
        ]}
      />
      <ProjectPage />
    </>
  );
}
