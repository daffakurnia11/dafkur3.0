"use client";

import React from "react";
import SocialContact from "./SocialContact";
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <section className="container mx-auto h-fit lg:px-5 md:px-24 sm:px-12 px-5">
      <div className="grid lg:grid-cols-2 gap-6">
        <SocialContact />
        <FormContact />
      </div>
    </section>
  );
}
