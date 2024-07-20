"use client";

import Typography from "@/components/Typography";
import classNames from "classnames";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function SkillsPage() {
  const [lang, setLang] = useState<string>("js");

  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh flex justify-center items-center">
      <div className="container mx-auto xl-max-w-[1024px] px-5 flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <TypeAnimation
            className="text-xl text-green-light text-center font-semibold"
            sequence={["Skills"]}
            speed={60}
            cursor={false}
            wrapper="h1"
          />
          <div className="max-w-[450px] text-center">
            <Typography.Typing
              sequence={[
                "Just a few of my skills using some programming lang that I've learned and mastered.",
              ]}
              className="text-center"
              cursor={false}
              speed={90}
            />
            <div className="mt-5 w-full bg-gradient-to-b from-green-primary from-50% to-green-primary/15 hover:bg-green-primary rounded-[16px] p-[1px] aspect-[5/3] transition duration-300">
              <div className="w-full h-full flex flex-col gap-2 bg-black rounded-[15px] pt-2 pb-3 px-3">
                <div className="flex justify-between gap-3">
                  <button
                    className={classNames(
                      "flex-1 shrink-0 block w-full pb-2 border-b border-solid transition duration-300",
                      lang === "js"
                        ? "border-green-primary"
                        : "border-transparent"
                    )}
                    onClick={() => setLang("js")}
                  >
                    <Typography.Small className="text-white">
                      Javascript
                    </Typography.Small>
                  </button>
                  <button
                    className={classNames(
                      "flex-1 shrink-0 block w-full pb-2 border-b border-solid transition duration-300",
                      lang === "ts"
                        ? "border-green-primary"
                        : "border-transparent"
                    )}
                    onClick={() => setLang("ts")}
                  >
                    <Typography.Small className="text-white">
                      Typescript
                    </Typography.Small>
                  </button>
                  <button
                    className={classNames(
                      "flex-1 shrink-0 block w-full pb-2 border-b border-solid transition duration-300",
                      lang === "py"
                        ? "border-green-primary"
                        : "border-transparent"
                    )}
                    onClick={() => setLang("py")}
                  >
                    <Typography.Small className="text-white">
                      Python
                    </Typography.Small>
                  </button>
                  <button
                    className={classNames(
                      "flex-1 shrink-0 block w-full pb-2 border-b border-solid transition duration-300",
                      lang === "php"
                        ? "border-green-primary"
                        : "border-transparent"
                    )}
                    onClick={() => setLang("php")}
                  >
                    <Typography.Small className="text-white">
                      PHP
                    </Typography.Small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
