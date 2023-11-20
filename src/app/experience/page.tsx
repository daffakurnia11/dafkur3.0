import OrganizationExp from "./OrganizationExp";
import WorkExp from "./WorkExp";
import React from "react";

export default function Experience() {
  return (
    <section className="experience">
      <WorkExp />
      <OrganizationExp />
    </section>
  );
}
