import React from "react";
import type { Metadata } from "next";
import BraillePlayPage from ".";

export const metadata: Metadata = {
  title: "Play Braille Games - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function BraillePlay() {
  return <BraillePlayPage />;
}
