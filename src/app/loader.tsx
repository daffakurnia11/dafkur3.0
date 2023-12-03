"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BrailleLetter from "./braille/BrailleLetter";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { firstLoading } from "@/utils/atom";

export default function Loader() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [letter, setLetter] = useState<string>("");
  const [isVisible, setIsVisible] = useAtom(firstLoading);
  const wordInput = "DAFFA";

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < wordInput.length) {
        if (!letter || letter === "space") {
          setLetter(wordInput[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setLetter("space");
        }
      } else {
        setLetter("space");
        setIsVisible(false);
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [currentIndex, letter]);

  return (
    <AnimatePresence>
      {isVisible && (
        <section className="position-absolute top-0 bottom-0 start-0 end-0 vh-100 vw-100 text-layout d-flex justify-content-center align-items-center">
          <Container className="w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 2 }}
              exit={{ opacity: 0 }}
            >
              <BrailleLetter letter={letter} />
            </motion.div>
          </Container>
        </section>
      )}
    </AnimatePresence>
  );
}
