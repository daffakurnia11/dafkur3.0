"use client";

import FormContact from "@/components/pages/FormContact";
import SocialContact from "@/components/pages/SocialContact";
import React from "react";

export default function ContactPage() {
  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh container xl:max-w-[1024px] mx-auto h-fit lg:px-5 md:px-24 sm:px-12 px-5 flex justify-center items-center">
      <div className="grid lg:grid-cols-2 gap-6 w-full">
        <SocialContact />
        <FormContact />
      </div>
    </section>
  );
}
