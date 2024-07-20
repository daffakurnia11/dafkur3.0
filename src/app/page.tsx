import React from "react";
import Homepage from "./Homepage";
import Seo from "@/components/Seo";
import { Metadata } from "next";

const pageMetadata = {
  title: "Home | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Welcome to Daffa Kurnia Fatah's website. Explore skills in Next.js, ReactJS, Figma, and animations.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, Home, Full-Stack Web Developer, Next.js, ReactJS, Figma, Web Animations, User Experience, Web Design, Sidoarjo, East Java, Indonesia",
};

export const metadata: Metadata = pageMetadata;

export default function Home() {
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
      <Homepage />
    </>
  );
}
