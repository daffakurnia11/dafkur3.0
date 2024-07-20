import React from "react";
import type { Metadata } from "next";
import AboutPage from "./AboutPage";
import Seo from "@/components/Seo";

const pageMetadata = {
  title: "About | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Learn more about Daffa Kurnia Fatah, a Full-stack Web Developer specializing in frontend development using Next.js. Discover his journey into web development, his learning resources, and his passion for sharing knowledge.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, About Daffa Kurnia Fatah, Full-stack Web Developer, Frontend Developer, Next.js, React.js, Web Development, Itsavirus, Sidoarjo, East Java, Indonesia, Mobile Development, React Native, Web Development Journey, Learning Resources, Self-learning, Web Development Services",
};

export const metadata: Metadata = pageMetadata;

export default function About() {
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
      <AboutPage />
    </>
  );
}
