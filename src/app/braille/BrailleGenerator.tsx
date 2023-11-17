import React, { useEffect, useState } from "react";
import BrailleDots from "./BrailleDots";

export default function BrailleGenerator({ word }: { word: string | null }) {
  const [wordInput, setWordInput] = useState<string | null>("HELLO WORLD");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [letter, setLetter] = useState<string>("");
  const [complete, setComplete] = useState<boolean>(true);

  useEffect(() => {
    if (word !== wordInput) {
      setWordInput(word);
      setComplete(false);
      setCurrentIndex(0);
    }
    if (wordInput) {
      const interval = setInterval(() => {
        if (currentIndex < wordInput.length) {
          if (!letter || letter === "") {
            if (wordInput[currentIndex] === " ") {
              setLetter("space");
            } else {
              setLetter(wordInput[currentIndex]);
            }
            setCurrentIndex((prevIndex) => prevIndex + 1);
          } else {
            setLetter("");
          }
        } else {
          if (letter === "" && currentIndex === wordInput.length) {
            setComplete(true);
          }
          setLetter("");
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [word, wordInput, currentIndex, letter]);

  return (
    word && (
      <div className="mt-3 d-flex align-items-center" style={{ minHeight: 80 }}>
        {complete && word === wordInput ? (
          <div className="d-flex flex-wrap justify-content-start mx-auto gap-4">
            {word.split("").map((letter: string, key: number) => (
              <div key={key}>
                {letter === " " ? (
                  <BrailleDots letter={"space"} withLabel />
                ) : (
                  <BrailleDots letter={letter} withLabel />
                )}
              </div>
            ))}
          </div>
        ) : (
          <BrailleDots letter={letter} />
        )}
      </div>
    )
  );
}
