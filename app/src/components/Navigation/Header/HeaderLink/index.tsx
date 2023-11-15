import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type HeaderLinkProps = {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const linkBackgroundClassNames = twMerge(
  "w-full h-full",
  "absolute inset-0 -z-10",
  "bg-white",
  "rounded-xl",
  "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100",
  "transition duration-300 ease-back-soft"
);

const linkClassNames = twMerge(
  "group relative",
  "flex justify-center items-center",
  "px-4 py-2",
  "hover:text-primary-800",
  "transition duration-300"
);
const HeaderLink = (props: HeaderLinkProps) => {
  return (
    <Link
      className={twMerge(linkClassNames, props.className)}
      onClick={props.onClick}
      href={props.href}
    >
      <div className={linkBackgroundClassNames} />
      {props.children}
    </Link>
  );
};

export default HeaderLink;
