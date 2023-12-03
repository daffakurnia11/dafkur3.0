import React from "react";
import type { Metadata } from "next";
import Homepage from "./home";

export const metadata: Metadata = {
  title: "Home - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function Home() {
  return <Homepage />;
}
