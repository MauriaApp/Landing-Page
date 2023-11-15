import React from "react";
import { twMerge } from "tailwind-merge";
import DownloadButton from "@/components/Layout/Button/DownloadButton";

const containerClassNames = twMerge(
  "relative min-w-[320px] min-h-[320px] max-w-[400px] w-full aspect-square",
  "mesh-background"
);
const DownloadCard = () => {
  return (
    <div className={containerClassNames}>
      <div className={"absolute inset-0 p-2 bg-radialHole"} />
      <div
        className={
          "relative z-10 h-full flex flex-col justify-center items-center gap-4"
        }
      >
        <DownloadButton platform={"ios"} />
        <DownloadButton platform={"android"} />
      </div>
    </div>
  );
};

export default DownloadCard;
