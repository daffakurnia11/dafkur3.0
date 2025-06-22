import Typography from "@/components/Typography";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function AboutBody() {
  return (
    <>
      <div className="flex flex-col gap-0 mb-4">
        <TypeAnimation
          className="text-green-primary text-base"
          sequence={["About"]}
          speed={80}
          cursor={false}
          wrapper="h2"
        />
        <TypeAnimation
          className="text-green-light text-xl font-bold"
          sequence={[
            "Daffa Kurnia Fatah",
            1000,
            "Daffa Kurnia",
            1000,
            "Daffa",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="h1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Typography.Typing
          sequence={[
            "Hello! I'm Daffa. I am a Full-stack Web Developer, currently focusing and deeply developing my skills as a Frontend Developer using Next.js.",
          ]}
          cursor={false}
          speed={90}
        />
        <Typography.Typing
          sequence={[
            200,
            "I began my journey into web development in 2020 while working on a final project for a college course in Computer Programming. This sparked my interest, and I further honed my skills through YouTube tutorials and self-learning by undertaking various projects in my own startup, which specializes in web development services.",
          ]}
          cursor={false}
          speed={95}
        />
        <Typography.Typing
          sequence={[
            400,
            "My primary learning resources are YouTube, self-learning through project work, and self-debugging with the help of Stack Overflow and Google. Presently, I am concentrating on frontend development using React.js and Next.js, and I am also expanding my knowledge into mobile development with React Native.",
          ]}
          cursor={false}
          speed={95}
        />
        <Typography.Typing
          sequence={[
            600,
            "I have a passion for learning new things and enjoy discussing web development topics. I also love sharing my knowledge with others.",
          ]}
          cursor={false}
          speed={90}
        />
        <Typography.Typing
          sequence={[
            800,
            "This website is a platform for me to showcase my works, projects, and skills in web development.",
          ]}
          cursor={false}
          speed={90}
        />
      </div>
    </>
  );
}
