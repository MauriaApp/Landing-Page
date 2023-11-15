import React from "react";
import { twMerge } from "tailwind-merge";

type HeroShapeProps = {
  active: boolean;
  mousePosition: { x: number; y: number };
};
const HeroShape = (props: HeroShapeProps) => {
  const computeShapeClassNames = (props: HeroShapeProps) =>
    twMerge(
      "fixed inset-0 z-[5]",
      "hidden sm:block",
      props.active ? "scale-100 opacity-10" : "scale-0 opacity-0",
      "bg-accent-200",
      "w-[16vw] h-[16vw]",
      "blur-3xl rounded-full",
      "transition duration-300",
      "pointer-events-none"
    );

  return (
    <div
      className={computeShapeClassNames(props)}
      style={{
        translate: `calc(${props.mousePosition.x}px - 8vw) calc(${props.mousePosition.y}px - 8vw)`,
      }}
    />
  );
};

export default HeroShape;
