import React from "react";
import type { Metadata } from "next";
import GamesPage from "./GamesPage";

export const metadata: Metadata = {
  title: "Coming Soon - Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function Games() {
  return <GamesPage />;
}
