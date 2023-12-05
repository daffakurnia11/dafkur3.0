import React from "react";
import type { Metadata } from "next";
import ContactPage from ".";

export const metadata: Metadata = {
  title: "Let's Talk - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function Project() {
  return <ContactPage />;
}
