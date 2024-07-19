import React from "react";

export default function TextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto max-w-[750px] h-dvh px-8 flex flex-col justify-center">
      {children}
    </section>
  );
}
