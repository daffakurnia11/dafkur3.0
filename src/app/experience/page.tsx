import React from "react";
import type { Metadata } from "next";
import ExperiencePage from "./ExperiencePage";

export const metadata: Metadata = {
  title: "My Experiences - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function Experience() {
  return <ExperiencePage />;
}
