"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useState } from "react";
import BrailleGenerator from "../BrailleGenerator";
import { Container } from "react-bootstrap";

export default function BraillePlay() {
  const [word, setWord] = useState<string>("HELLO WORLD");
  const [wordInput, setWordInput] = useState<any>("");

  const onSubmit = () => {
    setWord(String(wordInput));
  };
  return (
    <section className="home-layout d-flex justify-content-center align-items-center">
      <Container>
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
    </section>
  );
}
