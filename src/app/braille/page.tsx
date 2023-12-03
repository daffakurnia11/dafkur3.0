import React from "react";
import type { Metadata } from "next";
import BraillePage from ".";

export const metadata: Metadata = {
  title: "Braille Games - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function Braille() {
  return <BraillePage />;
}
