import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonProps = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "accent" | "dark";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  elastic?: boolean;
  className?: string;
  contentClassName?: string;
}>;

const computeButtonClassNames = (props: ButtonProps) =>
  twMerge(
    "group relative",
    "px-6 py-3",
    "font-bold text-lg",
    "text-white",
    props.className
  );

const roundedClassNames = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
};

const computeBackgroundClassName = (props: ButtonProps) =>
  twMerge(
    "absolute inset-0",
    roundedClassNames[props.rounded || "full"],
    variants[props.variant || "primary"],
    props.elastic !== false && elasticClassNames
  );

const variants = {
  primary: "bg-gradient-primary text-white",
  accent: "bg-gradient-accent text-white",
  dark: "bg-black text-white",
};

const elasticClassNames =
  "group-hover:scale-105 group-active:scale-100 transition-all duration-300 ease-back";
const Button = (props: ButtonProps) => {
  if (props.href) {
    return (
      <Link
        href={props.href}
        target={"_blank"}
        className={computeButtonClassNames(props)}
      >
        <div className={computeBackgroundClassName(props)} />

        <div
          className={twMerge(
            "flex justify-center items-center gap-4 whitespace-nowrap relative z-50",
            props.contentClassName
          )}
        >
          {props.children}
        </div>
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={computeButtonClassNames(props)}>
      <div className={computeBackgroundClassName(props)} />
      <div
        className={twMerge(
          "flex justify-center items-center gap-4 whitespace-nowrap relative z-50",
          props.contentClassName
        )}
      >
        {props.children}
      </div>
    </button>
  );
};

export default Button;
