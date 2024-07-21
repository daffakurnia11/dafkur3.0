import React from "react";
import type { Metadata } from "next";
import AboutPage from "./AboutPage";
import defaultSeoConfig from "@/utils/seo.json";

const pageMetadata = {
  title: "About | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Daffa Kurnia Fatah, a Full-stack Web Developer specializing in frontend development with Next.js.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, About Daffa Kurnia Fatah, Full-stack Web Developer, Frontend Developer, Next.js, React.js, Web Development, Itsavirus, Sidoarjo, East Java, Indonesia, Mobile Development, React Native, Web Development Journey, Learning Resources, Self-learning, Web Development Services",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function About() {
  return <AboutPage />;
}
