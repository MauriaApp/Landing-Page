import React from "react";
import { twMerge } from "tailwind-merge";
import { Chevron } from "@icons";
import DownloadButton from "@/components/Layout/Button/DownloadButton";
import { isMobile, isIOS } from "react-device-detect";

const titleClassNames = twMerge(
  "text-7xl font-black tracking-tight",
  "md:text-8xl lg:text-9xl",
  "hover:scale-105 transition-all duration-300 ease-back",
  "leading-none"
);

const heroContentClassNames = twMerge(
  "flex flex-col items-center gap-2",
  "text-xl font-medium",
  "leading-tight",
  "w-fit mx-auto sm:px-32"
);

const scrollIndicatorClassNames = twMerge(
  "flex flex-col gap-4",
  "items-center",
  "text-lg font-medium"
);

const Hero = () => {
  return (
    <section
      className={"flex flex-col flex-1 justify-between text-center px-8 py-4"}
    >
      <div />
      <div className={heroContentClassNames}>
        <span className={"block tracking-widest translate-y-1/2"}>Meet</span>
        <h1 className={titleClassNames}>Mauria</h1>
        <span>
          Le compagnon des étudiants <strong>JUNIA</strong>
        </span>
        {isMobile ? (
          <DownloadButton
            platform={isIOS ? "ios" : "android"}
            className={"mt-8"}
          />
        ) : (
          <div className={"flex flex-wrap justify-center gap-4 mt-8 w-full"}>
            <DownloadButton platform={"ios"} />
            <DownloadButton platform={"android"} />
          </div>
        )}
      </div>
      <div className={scrollIndicatorClassNames}>
        <span className={"opacity-75"}>
          Fait par des étudiants, pour les étudiants
        </span>
        <Chevron className={"w-8 h-8 animate-bounce duration-[1600ms]"} />
      </div>
    </section>
  );
};

export default Hero;
