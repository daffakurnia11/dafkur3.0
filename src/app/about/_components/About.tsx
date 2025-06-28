"use client";

import React from "react";
import AboutBody from "./AboutBody";
import AboutStatus from "./AboutStatus";
import AboutPhoto from "./AboutPhoto";
import AboutContribution from "./AboutContribution";
import { useGtag } from "@/hooks/useGtag.hook";

export default function About() {
  const { event } = useGtag();

  React.useEffect(() => {
    event("page_view", {
      page_name: "about",
    });
  }, [event]);

  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh container mx-auto flex justify-center items-center">
      <div className="container xl:max-w-[1024px] mx-auto h-full flex-1 px-6">
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-7 lg:col-span-5 order-2 lg:order-1 pb-8">
            <AboutBody />
            <AboutStatus />
            <AboutContribution />
          </div>
          <div className="col-span-7 lg:col-span-2 order-1 lg:order-2">
            <AboutPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}
