import Typography from "@/components/Typography";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import SkillsEditor from "./SkillsEditor";

export default function SkillsBody() {
  return (
    <>
      <TypeAnimation
        className="text-xl text-green-light text-center font-semibold"
        sequence={["Skills"]}
        speed={60}
        cursor={false}
        wrapper="h1"
      />
      <div className="w-full mx-auto text-center">
        <Typography.Typing
          sequence={[
            "Just a few of my skills using some programming lang that I've learned and mastered.",
          ]}
          className="text-center"
          cursor={false}
          speed={90}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
        >
          <div className="mt-5 max-w-[370px] sm:max-w-[500px] mx-auto bg-gradient-to-b from-green-primary from-50% to-green-primary/15 hover:bg-green-primary rounded-[16px] p-[1px] aspect-[3/2] sm:aspect-[5/3] transition duration-300">
            <div className="w-full h-full flex flex-col gap-2 bg-black rounded-[15px] pt-2 pb-3 px-3">
              <SkillsEditor />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
