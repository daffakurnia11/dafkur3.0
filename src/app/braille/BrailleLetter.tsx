import React from "react";
import { motion } from "framer-motion";
import { brailleLetter } from "@/utils/braille";

const BrailleDots = ({
  letter,
  index,
}: {
  letter: string | null;
  index: number;
}) => (
  <div className="w-4 h-4 flex items-center justify-center">
    <motion.div
      className="w-2.5 h-2.5 rounded-full bg-green-primary"
      initial={{ opacity: 0, width: 8, height: 8 }}
      animate={
        letter && brailleLetter[letter.toUpperCase()]
          ? {
              opacity: 1,
              width: brailleLetter[letter.toUpperCase()][index] > 0 ? 16 : 9,
              height: brailleLetter[letter.toUpperCase()][index] > 0 ? 16 : 9,
            }
          : {}
      }
    ></motion.div>
  </div>
);

const BrailleLabel = ({ letter }: { letter: string | null }) => (
  <p className="text-center text-body text-light-green">
    {letter === "space" ? `" "` : letter}
  </p>
);

export default function BrailleLetter({
  letter,
  withLabel,
}: {
  letter: string | null;
  withLabel?: boolean | true;
}) {
  return (
    <>
      <div className="w-10 bg-black grid grid-cols-2 gap-x-1 gap-y-2">
        {[...Array(6)].map((_, key: number) => (
          <BrailleDots letter={letter} index={key} key={key} />
        ))}
      </div>
      {withLabel && <BrailleLabel letter={letter} />}
    </>
  );
}
