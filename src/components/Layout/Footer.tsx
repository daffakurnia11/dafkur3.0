import React from "react";
import Scramble from "../Scramble";
import LiveClock from "./LiveClock";

export default function Footer() {
  return (
    <div className="layout-footer p-sm-4 p-3 w-100 d-none d-md-flex justify-content-between align-items-center position-absolute bottom-0 start-0 end-0">
      <small className="text-small text-primary-green d-flex flex-column gap-0">
        <Scramble>Sidoarjo, East Java - Indonesia</Scramble>
        <div className="d-flex flex-row gap-2">
          <Scramble>UTC+7</Scramble>
          <span className="d-none d-sm-block">-</span>
          <LiveClock />
        </div>
      </small>
      <small className="text-small text-primary-green d-flex align-items-end flex-column gap-0">
        <Scramble>Dafkur Version</Scramble>
        <Scramble>{process.env.NEXT_PUBLIC_VERSION!}</Scramble>
      </small>
    </div>
  );
}
