"use client";

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BrailleGenerator from "./BrailleGenerator";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { TypeAnimation } from "react-type-animation";

export default function Braille() {
  const [word, setWord] = useState<string>("HELLO WORLD");
  const [wordInput, setWordInput] = useState<any>("");

  const onSubmit = () => {
    setWord(String(wordInput));
  };

  return (
    <Container className="braille vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="braille-desc w-100">
        <TypeAnimation
          className="text-heading-4 mb-4"
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
        <TypeAnimation
          className="d-block mb-3 text-start text-light-green"
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
          wrapper={"p"}
        />
      </div>
      <div className="braille-games w-100 d-flex flex-column align-items-center">
        <div className="mb-4">
          <Input
            className="w-100 mb-3"
            placeholder="Ex: Hello World"
            onChange={(e) => setWordInput(e.target.value)}
          />
          <Button className="w-100 text-center" onClick={() => onSubmit()}>
            Generate
          </Button>
        </div>
        <BrailleGenerator word={word} />
      </div>
    </Container>
  );
}
