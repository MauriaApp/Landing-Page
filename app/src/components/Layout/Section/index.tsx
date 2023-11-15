import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = PropsWithChildren<{
  title: string;
  id?: string;
  sideContent?: React.ReactNode;
  sidePosition?: "left" | "right";
  className?: string;
}>;
const sectionClassNames = twMerge(
  "flex items-center",
  "py-8",
  "mx-8 sm:mx-16",
  "min-h-[60vh]"
);

const titleClassNames = twMerge("text-2xl sm:text-3xl font-bold");

const wrapperClassNames = twMerge(
  "flex items-center justify-center gap-20 flex-wrap",
  "w-full h-full max-w-6xl",
  "mx-auto"
);

const Section = (props: SectionProps) => {
  return (
    <section className={sectionClassNames} id={props.id}>
      <div className={wrapperClassNames}>
        <div
          className={twMerge(
            "flex flex-col gap-8 flex-1 min-w-[300px]",
            props.sidePosition == "left" && "md:order-last"
          )}
        >
          <h2 className={titleClassNames}>{props.title}</h2>
          <div className={twMerge("flex flex-col gap-4", props.className)}>
            {props.children}
          </div>
        </div>
        {props.sideContent}
      </div>
    </section>
  );
};

export default Section;
