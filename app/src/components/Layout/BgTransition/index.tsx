import React from "react";
import { twMerge } from "tailwind-merge";

type BgTransitionProps = {
  direction?: "fadeIn" | "fadeOut";
  className?: string;
};
const BgTransition = (props: BgTransitionProps) => {
  const transitionClassNames = twMerge(
    "w-full h-8",
    props.direction === "fadeOut" ? "bg-fadeOut" : "bg-fadeIn",
    props.className
  );

  return <div className={transitionClassNames} />;
};

export default BgTransition;
