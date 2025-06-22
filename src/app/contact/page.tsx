import React from "react";
import type { Metadata } from "next";
import Contact from "./_components/Contact";
import defaultSeoConfig from "@/utils/seo.json";

const pageMetadata = {
  title: "Contact | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Contact Daffa Kurnia Fatah, a Full-stack Web Developer. Connect via Instagram, WhatsApp, GitHub, or LinkedIn.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, Contact, Get in Touch, Full-stack Web Developer, Instagram, WhatsApp, GitHub, LinkedIn, Contact Form, Web Development, Collaboration, Sidoarjo, East Java, Indonesia",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function ContactPage() {
  return <Contact />;
}
