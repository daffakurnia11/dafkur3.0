"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Braille() {
  return (
    <section className="braille text-layout d-flex justify-content-center align-items-center">
      <Container>
        <div className="d-flex gap-3 mb-4">
          <p style={{ width: 85 }} className="d-none d-sm-block"></p>
          <TypeAnimation
            className="text-heading-4"
            sequence={[
              "Braille Quest!",
              1000,
              "Braille Games!",
              1000,
              "Braille Generator!",
              1000,
              "Braille Maker!",
              1000,
            ]}
            speed={20}
            repeat={Infinity}
            wrapper="h1"
          />
        </div>
        <div className="d-flex gap-3 mb-4">
          <div
            style={{ width: 85 }}
            className="d-none d-sm-block text-body flex-shrink-0 text-end text-primary-green"
          >
            Intro.
          </div>
          <div className="braille-intro">
            <TypeAnimation
              className="d-block text-body text-light-green"
              sequence={[
                `Welcome to 'Braille Quest'! Dive into the world of tactile
            communication by decoding words and phrases into Braille. Challenge
            your mind and unravel the mystery as you generate random words or
            sentences to convert them into the fascinating language of dots.
            Explore the art of Braille translation while having fun in this simple
            yet engaging game. Are you ready to decode the secrets hidden within
            words?`,
              ]}
              speed={99}
              cursor={false}
            />
          </div>
        </div>
        <div className="d-flex gap-3 mb-4">
          <div
            style={{ width: 85 }}
            className="d-none d-sm-block text-body flex-shrink-0 text-end text-primary-green"
          >
            Start.
          </div>
          <Link href={"/braille/play"}>
            <TypeAnimation
              className="d-block text-body text-light-green text-decoration-underline"
              sequence={[
                `Start play!`,
                1000,
                `Start generate!`,
                1000,
                `Start make!`,
                1000,
                `Start now!`,
                1000,
              ]}
              speed={25}
              repeat={Infinity}
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
