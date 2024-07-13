"use client";

import Typography from "@/components/Typography";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const FirstRow = ({ children }: { children?: React.ReactNode }) => (
  <div className="shrink-0 w-[85px]">{children}</div>
);

const SecondRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 w-full">{children}</div>
);

export default function Homepage() {
  return (
    <section className="min-h-dvh flex items-center justify-center">
      <div className="max-w-[750px] flex-1">
        <div className="flex gap-5 mb-4">
          <FirstRow />
          <SecondRow>
            <TypeAnimation
              className="font-semibold text-xl text-green-light"
              sequence={[
                "Hello World!",
                1000,
                "Hello Fellas!",
                1000,
                "Hello Everyone!",
                1000,
                "Hello Guys!",
                1000,
              ]}
              speed={20}
              repeat={Infinity}
              wrapper="h1"
            />
          </SecondRow>
        </div>
        <div className="flex gap-5 mb-4 min-h-[132px]">
          <FirstRow>
            <Typography.Paragraph className="text-green-primary text-end">
              Greetings.
            </Typography.Paragraph>
          </FirstRow>
          <SecondRow>
            <TypeAnimation
              className="font-normal text-base text-green-light"
              sequence={[
                `
                Fellow wanderers of the digital domain! I'm Daffa Kurnia Fatah
                - think of me as your trusty coding bard from the sun-kissed lands
                of Sidoarjo, East Java - Indonesia. With Next.js and React as my trusty instruments
                since 2021, I craft not only code but also wield the art of design, conjuring up
                web magic through Figma and weaving interactive spells of user
                experience and animation. Your wish is my code!
                `,
              ]}
              speed={99}
              cursor={false}
            />
          </SecondRow>
        </div>
      </div>
    </section>
  );
}
