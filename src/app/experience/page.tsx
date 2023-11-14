import OrganizationExp from "@/components/pages/OrganizationExp";
import WorkExp from "@/components/pages/WorkExp";
import React from "react";

export default function Experience() {
  return (
    <section className="experience">
      <WorkExp />
      <OrganizationExp />
    </section>
  );
}
