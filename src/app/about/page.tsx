import React from "react";
import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function About() {
  return <AboutPage />;
}
