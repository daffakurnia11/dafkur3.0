"use client";

import React from "react";
import SocialContact from "./SocialContact";
import FormContact from "./FormContact";

export default function ContactPage() {
  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh container mx-auto h-fit lg:px-5 md:px-24 sm:px-12 px-5 flex justify-center items-center">
      <div className="grid lg:grid-cols-2 gap-6 w-full">
        <SocialContact />
        <FormContact />
      </div>
    </section>
  );
}
