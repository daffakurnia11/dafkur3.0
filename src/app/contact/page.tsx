import React from "react";
import type { Metadata } from "next";
import ContactPage from "./ContactPage";
import Seo from "@/components/Seo";

const pageMetadata = {
  title: "Contact | Daffa Kurnia Fatah | Dafkur.com",
  description:
    "Reach out to Daffa Kurnia Fatah, a Full-stack Web Developer. Connect via Instagram, WhatsApp, GitHub, LinkedIn, or send a message directly through the contact form. Let's discuss web development, collaboration, or any inquiries you have.",
  authors: { name: "Daffa Kurnia Fatah", url: "https://dafkur.com" },
  keywords:
    "Daffa Kurnia Fatah, Contact, Get in Touch, Full-stack Web Developer, Instagram, WhatsApp, GitHub, LinkedIn, Contact Form, Web Development, Collaboration, Sidoarjo, East Java, Indonesia",
};

export const metadata: Metadata = pageMetadata;

export default function Project() {
  return (
    <>
      <Seo
        title={pageMetadata.title}
        description={pageMetadata.description}
        additionalMetaTags={[
          {
            name: "keywords",
            content: pageMetadata.keywords,
          },
          {
            name: "author",
            content: pageMetadata.authors.name,
          },
        ]}
      />
      <ContactPage />
    </>
  );
}
