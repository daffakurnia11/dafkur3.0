"use client";

import BrailleLetter from "@/app/braille/BrailleLetter";
import React, { useEffect, useState } from "react";

export default function Logo({ delay }: { delay?: number }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [letter, setLetter] = useState<string>("");
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
        setCurrentIndex(0);
        setLetter("space");
        clearInterval(interval);
      }
    }, delay ?? 750);

    return () => clearInterval(interval);
  }, [currentIndex, letter]);

  return <BrailleLetter letter={letter} />;
}
