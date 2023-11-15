"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Navigation/Header";
import Hero from "@/components/Sections/Hero";
import BgTransition from "@/components/Layout/BgTransition";
import HeroShape from "@/components/Sections/Hero/HeroShape";
import { useMouseMove } from "@/hooks/useMouseMove";

const ContentHead = () => {
  const [shapeActive, setShapeActive] = useState(false);
  const heroRef = React.useRef<HTMLDivElement>(null);

  const { mousePosition, onMouseMove } = useMouseMove();

  useEffect(() => {
    if (heroRef && heroRef.current) {
      heroRef.current?.addEventListener("mousemove", onMouseMove);

      return () =>
        heroRef.current?.removeEventListener("mousemove", onMouseMove);
    }
  }, [shapeActive]);
  return (
    <div
      ref={heroRef}
      className={"relative mesh-background h-[125vh] overflow-hidden z-10"}
    >
      <div className={"relative bg-hero z-10 overflow-hidden"}>
        <div
          className={"flex flex-col h-screen relative"}
          onMouseEnter={() => setShapeActive(true)}
          onMouseLeave={() => setShapeActive(false)}
        >
          <Header />
          <Hero />
        </div>
        <BgTransition
          direction={"fadeOut"}
          className={"relative h-[25vh] z-20"}
        />
        <HeroShape active={shapeActive} mousePosition={mousePosition} />
      </div>
    </div>
  );
};

export default ContentHead;
