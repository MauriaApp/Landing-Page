import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

const cardClassNames = twMerge(
  "flex flex-col gap-4",
  "relative overflow-hidden rounded-3xl",
  "p-6",
  "text-primary-10 font-medium",
  "mesh-background"
);

const cardContentClassNames = twMerge("flex flex-col gap-4", "relative z-10");

const Card = (props: CardProps) => {
  return (
    <div className={twMerge(cardClassNames, props.className)}>
      <div className={"absolute inset-0 bg-primary-100/30"} />
      <div className={cardContentClassNames}>
        <h3 className={"text-xl font-bold"}>{props.title}</h3>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
