"use client";

import React from "react";
import Clock from "react-live-clock";

export default function LiveClock() {
  return <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Jakarta"} />;
}
