import OrganizationExp from "@/components/pages/OrganizationExp";
import WorkExp from "@/components/pages/WorkExp";
import React from "react";
import { Container } from "react-bootstrap";

export default function Experience() {
  return (
    <>
      <section className="mt-sm-4 experience d-flex justify-content-center align-items-center">
        <Container>
          <WorkExp />
        </Container>
      </section>
      <section className="mt-sm-5 experience d-flex justify-content-center align-items-center">
        <Container>
          <OrganizationExp />
        </Container>
      </section>
    </>
  );
}
