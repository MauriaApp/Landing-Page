import React from "react";
import Image from "next/image";

const EcoIndexBadge = () => {
  return (
    <a
      href="https://bff.ecoindex.fr/redirect/?url=https://mauria.fr"
      target="_blank"
    >
      <Image
        unoptimized
        src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://mauria.fr"
        alt="Ecoindex Badge"
      />
    </a>
  );
};

export default EcoIndexBadge;
