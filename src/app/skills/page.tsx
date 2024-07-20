import React from "react";
import type { Metadata } from "next";
import SkillsPage from "./SkillsPage";

export const metadata: Metadata = {
  title: "Skills - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function Skills() {
  return <SkillsPage />;
}
