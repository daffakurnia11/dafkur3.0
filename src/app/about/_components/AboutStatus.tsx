import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function AboutStatus() {
  return (
    <div className="flex mt-6 w-full flex-wrap">
      <div className="mb-4 flex flex-col basis-full">
        <TypeAnimation
          className="text-green-primary text-base"
          sequence={["My role is"]}
          speed={80}
          cursor={false}
        />
        <TypeAnimation
          className="text-green-light text-base font-bold"
          sequence={["Frontend Developer"]}
          speed={80}
          cursor={false}
        />
      </div>
      <div className="mb-4 flex flex-col basis-full md:basis-1/2">
        <TypeAnimation
          className="text-green-primary text-base"
          sequence={["Currently working on"]}
          speed={80}
          cursor={false}
        />
        <TypeAnimation
          className="text-green-light text-base font-bold"
          sequence={["Agensi Pekerjaan Ajobthing Sdn Bhd"]}
          speed={80}
          cursor={false}
        />
      </div>
      <div className="mb-4 flex flex-col basis-full md:basis-1/2">
        <TypeAnimation
          className="text-green-primary text-base"
          sequence={["Working at"]}
          speed={80}
          cursor={false}
        />
        <TypeAnimation
          className="text-green-light text-base font-bold"
          sequence={["Sleman, Yogyakarta, Indonesia"]}
          speed={80}
          cursor={false}
        />
      </div>
    </div>
  );
}
