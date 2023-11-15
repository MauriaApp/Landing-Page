"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import Hamburger from "@/components/Navigation/Header/Hambruger";
import HeaderLink from "@/components/Navigation/Header/HeaderLink";
import { Logo } from "@icons";
import Link from "next/link";

const headerClassNames = twMerge(
  "relative z-[64]",
  "flex justify-between items-center gap-8",
  "mx-auto h-16 w-full max-w-6xl",
  "text-lg font-medium"
);

const computeHeaderBackgroundClassNames = (isOpen: boolean) =>
  twMerge(
    "fixed inset-0 z-[60]",
    "h-screen w-screen",
    isOpen ? "scale-y-100 visible" : "scale-y-0 invisible",
    "bg-primary",
    "origin-top",
    "transition ease-in-out duration-500"
  );

const Header = () => {
  const [isOpen, setIsOpen] = React.useReducer((a) => !a, false);

  return (
    <div className={"mx-8 md:mx-16"}>
      <header className={headerClassNames}>
        <Link href={"#"} className={"flex items-center gap-4"}>
          <Logo className={"w-10 h-10 text-white"} />
          <span className={"hidden md:block font-bold"}>Mauria</span>
        </Link>

        <Hamburger isOpen={isOpen} toggle={setIsOpen} className={"sm:hidden"} />
        <nav className={"hidden sm:flex items-center gap-4"}>
          <HeaderLink href={"#"}>Accueil</HeaderLink>
          <HeaderLink href={"#présentation"}>Présentation</HeaderLink>
          <HeaderLink href={"#contribuer"}>Contribuer</HeaderLink>
          <HeaderLink href={"#téléchargement"}>Télécharger</HeaderLink>
        </nav>
      </header>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={computeHeaderBackgroundClassNames(isOpen)}></div>
    </div>
  );
};

const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  const menuClassNames = twMerge(
    "sm:hidden",
    "fixed inset-0 z-[62]",
    "invisible opacity-0",
    isOpen && "visible opacity-100 delay-200",
    " w-screen h-screen",
    "px-16 py-32",
    "transition-all duration-500 ease-back"
  );

  return (
    <div className={menuClassNames}>
      <nav className={"flex flex-col gap-16 text-2xl font-bold"}>
        <HeaderLink href={"#"} onClick={setIsOpen}>
          Accueil
        </HeaderLink>
        <HeaderLink href={"#présentation"} onClick={setIsOpen}>
          Présentation
        </HeaderLink>
        <HeaderLink href={"#contribuer"} onClick={setIsOpen}>
          Contribuer
        </HeaderLink>
        <HeaderLink href={"#téléchargement"} onClick={setIsOpen}>
          Télécharger
        </HeaderLink>
      </nav>
    </div>
  );
};

export default Header;
