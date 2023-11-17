import React from "react";
import { motion } from "framer-motion";
import { brailleLetter } from "@/utils/braille";

export default function BrailleDots({
  letter,
  withLabel,
}: {
  letter: string | null;
  withLabel?: boolean | true;
}) {
  return (
    <>
      <div className="braille-letter">
        {[...Array(6)].map((_, key: number) => (
          <div className="braille-dots" key={key}>
            <motion.div
              className="dots-item"
              initial={{ opacity: 0, width: 8, height: 8 }}
              animate={
                letter && brailleLetter[letter.toUpperCase()]
                  ? {
                      opacity: 1,
                      width:
                        brailleLetter[letter.toUpperCase()][key] > 0 ? 16 : 9,
                      height:
                        brailleLetter[letter.toUpperCase()][key] > 0 ? 16 : 9,
                    }
                  : {}
              }
            ></motion.div>
          </div>
        ))}
      </div>
      {withLabel && (
        <p className="text-center text-body text-light-green">
          {letter === "space" ? `" "` : letter}
        </p>
      )}
    </>
  );
}
