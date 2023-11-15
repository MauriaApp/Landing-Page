import React from "react";
import { Github, Logo } from "@icons";
import { twMerge } from "tailwind-merge";
import HeaderLink from "@/components/Navigation/Header/HeaderLink";
import EcoIndexBadge from "@/components/Navigation/Footer/EcoBadge";

const footerClassNames = twMerge(
  "px-8 py-4",
  "font-medium text-sm opacity-80",
  "bg-primary-900"
);

const footerContentClassNames = twMerge(
  "flex flex-col sm:flex-row items-center sm:justify-between gap-4 flex-wrap",
  "max-w-6xl mx-auto"
);

const Footer = () => {
  return (
    <footer className={footerClassNames}>
      <div className={footerContentClassNames}>
        <Logo className={"w-12 h-12"} />
        <span>© Mauria - GNU V3 Licence</span>
        <div className={"flex items-center gap-4"}>
          <EcoIndexBadge />
          <HeaderLink
            href={"https://github.com/MauriaApp"}
            className={"flex items-center gap-2"}
          >
            <Github className={"w-6 h-6"} />
            <span>GitHub</span>
          </HeaderLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
