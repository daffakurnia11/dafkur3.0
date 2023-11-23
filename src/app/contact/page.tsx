import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormContact from "./FormContact";
import SocialContact from "./SocialContact";

export default function Contact() {
  return (
    <section className="contact grid-layout d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col lg={6}>
            <SocialContact />
          </Col>
          <Col lg={6}>
            <FormContact />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
