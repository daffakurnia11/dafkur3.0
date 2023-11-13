import React from "react";
import Scramble from "../Scramble";
import LiveClock from "../LiveClock";

export default function Footer() {
  return (
    <div className="layout-footer p-4 w-100 d-flex justify-content-between position-absolute bottom-0 start-0 end-0">
      <small className="text-small text-primary-green">
        <Scramble>Bali, Indonesia</Scramble> - <LiveClock />
      </small>
      <small className="text-small text-primary-green">
        <Scramble>Dafkur - 3.0.0 Version</Scramble>
      </small>
    </div>
  );
}
