"use client";

import React from "react";
import FormContact from "./FormContact";
import SocialContact from "./SocialContact";
import { useGtag } from "@/hooks/useGtag.hook";

export default function Contact() {
  const { event } = useGtag();

  React.useEffect(() => {
    event("page_view", {
      page_name: "contact",
    });
  }, [event]);

  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh container xl:max-w-[1024px] mx-auto h-fit lg:px-5 md:px-24 sm:px-12 px-5 flex justify-center items-center">
      <div className="grid lg:grid-cols-2 gap-6 w-full pb-8">
        <SocialContact />
        <FormContact />
      </div>
    </section>
  );
}
