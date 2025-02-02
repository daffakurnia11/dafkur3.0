import React from "react";
import LiveClock from "./LiveClock";
import Typography from "../../Typography";

export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 hidden sm:flex items-center justify-between">
      <div className="flex flex-col items-start">
        <Typography.Small isScrambled className="text-green-primary">
          Sleman, Yogyakarta - Indonesia
        </Typography.Small>
        <div className="flex flex-row gap-1">
          <Typography.Small isScrambled className="text-green-primary">
            UTC+7
          </Typography.Small>
          <Typography.Small className="text-green-primary">-</Typography.Small>
          <Typography.Small isScrambled className="text-green-primary">
            <LiveClock />
          </Typography.Small>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Typography.Small isScrambled className="text-green-primary">
          Dafkur Version
        </Typography.Small>
        <Typography.Small isScrambled className="text-green-primary">
          {process.env.NEXT_PUBLIC_VERSION!}
        </Typography.Small>
      </div>
    </div>
  );
}
