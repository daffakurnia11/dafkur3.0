import React from "react";
import Scramble from "../Scramble";
import LiveClock from "../LiveClock";

export default function Footer() {
  return (
    <div className="layout-footer p-sm-4 p-3 w-100 d-flex justify-content-between align-items-center position-absolute bottom-0 start-0 end-0">
      <small className="text-small text-primary-green d-flex flex-column flex-sm-row gap-sm-2 gap-0">
        <Scramble>Bali, Indonesia</Scramble>
        <span className="d-none d-sm-block">-</span>
        <LiveClock />
      </small>
      <small className="text-small text-primary-green d-flex align-items-end flex-column flex-sm-row gap-sm-2 gap-0">
        <Scramble>Dafkur Version</Scramble>
        <span className="d-none d-sm-block">-</span>
        <Scramble>3.0.0</Scramble>
      </small>
    </div>
  );
}
