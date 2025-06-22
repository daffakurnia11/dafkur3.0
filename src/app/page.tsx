import React from "react";
import Home from "./_components/Home";
import { Metadata } from "next";
import defaultSeoConfig from "@/utils/seo.json";

const pageMetadata = {
  title: "Home | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Welcome to Daffa Kurnia Fatah's website. Explore skills in Next.js, ReactJS, Figma, and animations.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, Home, Full-Stack Web Developer, Next.js, ReactJS, Figma, Web Animations, User Experience, Web Design, Sidoarjo, East Java, Indonesia",
};

export const metadata: Metadata = {
  ...defaultSeoConfig,
  ...pageMetadata,
};

export default function Homepage() {
  return <Home />;
}
