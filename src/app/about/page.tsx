import React from "react";
import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "Coming Soon - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function Blog() {
  return <AboutPage />;
}
