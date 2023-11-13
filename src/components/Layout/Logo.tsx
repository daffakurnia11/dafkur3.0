import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      width={29}
      height={42}
      src={"/logo.svg"}
      alt="Dafkur Logo"
      className="header-logo mx-4"
    />
  );
}
