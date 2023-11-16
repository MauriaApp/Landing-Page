import type { Metadata } from "next";
import "../theme/globals.css";
import { satoshi } from "@/theme/fonts/fonts";

import { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
  themeColor: "#3F2A56",
};
export const metadata: Metadata = {
  title: "Mauria",
  description:
    "Mauria, c'est l'application qu'il te faut pour t'accompagner et simplifier ta vie à JUNIA. 📚\nConsulte ton emploi du temps, tes notes, tes absences et bien plus encore 🤩 !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={"scroll-smooth"}>
      <body className={satoshi.className}>{children}</body>
    </html>
  );
}
