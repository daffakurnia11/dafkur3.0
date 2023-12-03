import OrganizationExp from "./OrganizationExp";
import WorkExp from "./WorkExp";
import React from "react";

export default function ExperiencePage() {
  return (
    <section className="experience">
      <WorkExp />
      <OrganizationExp />
    </section>
  );
}
