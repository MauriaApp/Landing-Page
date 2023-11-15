import React from "react";
import { twMerge } from "tailwind-merge";

type HamburgerProps = {
  isOpen: boolean;
  toggle: () => void;
  className?: string;
};

const barClassNames = "w-full h-1 bg-white rounded-full origin-left transition";

const Hamburger = (props: HamburgerProps) => {
  return (
    <button
      onClick={props.toggle}
      className={twMerge(
        "flex flex-col justify-center gap-1.5",
        "w-8 h-8",
        props.className
      )}
    >
      <div
        className={twMerge(
          barClassNames,
          props.isOpen && "rotate-45 -translate-y-1/4"
        )}
      />
      <div className={twMerge(barClassNames, props.isOpen && "opacity-0")} />
      <div
        className={twMerge(
          barClassNames,
          props.isOpen && "-rotate-45 translate-y-1/4"
        )}
      />
    </button>
  );
};

export default Hamburger;
