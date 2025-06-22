import React from "react";
import type { Metadata } from "next";
import Comingsoon from "@/components/pages/Comingsoon";

export const metadata: Metadata = {
  title: "Coming Soon - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function Blog() {
  return <Comingsoon />;
}
