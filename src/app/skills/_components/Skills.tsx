"use client";

import React from "react";
import SkillsBody from "./SkillsBody";
import SkillsTechStack from "./SkillsTechStack";
import { useGtag } from "@/hooks/useGtag.hook";

export default function Skills() {
  const { event } = useGtag();

  React.useEffect(() => {
    event("page_view", {
      page_name: "skills",
    });
  }, [event]);

  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh flex justify-center items-center">
      <div className="container mx-auto xl-max-w-[1024px] px-5 flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <SkillsBody />
          <SkillsTechStack />
        </div>
      </div>
    </section>
  );
}
