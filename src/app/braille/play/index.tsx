"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useState } from "react";
import BrailleGenerator from "../BrailleGenerator";
import { Container } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Scramble from "@/components/Scramble";
import Slider from "react-input-slider";

export default function BraillePlayPage() {
  const [word, setWord] = useState<string | null>(null);
  const [wordInput, setWordInput] = useState<any>("");
  const [timer, setTimer] = useState<number>(1000);

  const onSubmit = () => {
    setWord(String(wordInput));
  };

  return (
    <section className="braille text-layout d-flex justify-content-center align-items-center">
      <Container>
        <div className="braille-games w-100 d-flex flex-column align-items-center">
          <TypeAnimation
            className="games-hint text-body text-light-green mb-3"
            sequence={[
              500,
              "Start creating your Braille text with typing your word below.",
            ]}
            speed={70}
            cursor={false}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            style={{ width: 300 }}
          >
            <Input
              className="w-100 mb-3"
              placeholder="Ex: Hello World"
              onChange={(e) => setWordInput(e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
          >
            <Slider
              axis="x"
              x={timer}
              xmin={300}
              xmax={2000}
              onChange={({ x }) => setTimer(x)}
              styles={{
                track: {
                  backgroundColor: "#a5c9ca",
                  height: 5,
                  width: 300,
                },
                active: {
                  backgroundColor: "#426872",
                },
                thumb: {
                  width: 10,
                  height: 10,
                },
              }}
            />
            <div className="d-flex my-3 gap-2 justify-content-center">
              <Scramble className="text-small">Your delay : </Scramble>
              <span className="text-small">{String(timer)} ms</span>
            </div>
          </motion.div>
          <div style={{ height: 45, width: 300 }}>
            <AnimatePresence>
              {wordInput && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ type: "tween", duration: 0.5 }}
                >
                  <Button
                    buttonType="primary"
                    className="w-100 text-center"
                    onClick={() => onSubmit()}
                  >
                    <Scramble>Generate</Scramble>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div style={{ minHeight: 100 }}>
            <BrailleGenerator word={word} timer={timer} />
          </div>
        </div>
      </Container>
    </section>
  );
}
