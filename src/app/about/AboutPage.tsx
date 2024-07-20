"use client";

import Typography from "@/components/Typography";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh container mx-auto flex justify-center items-center">
      <div className="container xl:max-w-[1024px] mx-auto h-full flex-1 px-6">
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-7 lg:col-span-5 order-2 lg:order-1">
            <div className="flex flex-col gap-0 mb-4">
              <TypeAnimation
                className="text-green-primary text-base"
                sequence={["About"]}
                speed={80}
                cursor={false}
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
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="col-span-2 sm:col-span-1 flex flex-col">
                <TypeAnimation
                  className="text-green-primary text-base"
                  sequence={["Currently working on"]}
                  speed={80}
                  cursor={false}
                />
                <TypeAnimation
                  className="text-green-light text-base font-bold"
                  sequence={["Itsavirus"]}
                  speed={80}
                  cursor={false}
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col">
                <TypeAnimation
                  className="text-green-primary text-base"
                  sequence={["Work remotely from"]}
                  speed={80}
                  cursor={false}
                />
                <TypeAnimation
                  className="text-green-light text-base font-bold"
                  sequence={["Sidoarjo, East Java, Indonesia"]}
                  speed={80}
                  cursor={false}
                />
              </div>
            </div>
          </div>
          <div className="col-span-7 lg:col-span-2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
            >
              <div className="w-full max-w-[300px] mx-auto mt-16 rounded-2xl overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Daffa Kurnia Fatah"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
