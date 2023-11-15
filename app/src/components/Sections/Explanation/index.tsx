import React from "react";
import Section from "@/components/Layout/Section";
import Image from "next/image";

const Explanations = () => {
  return (
    <Section
      title={"Comment ça fonctionne ?"}
      sidePosition={"left"}
      sideContent={
        <div className={"rounded-3xl overflow-hidden"}>
          <Image
            className={"w-80 h-80 sm:w-96 sm:h-96 object-cover"}
            src={"/images/Login.webp"}
            width={1200}
            height={1200}
            alt={"Page d'accueil de Mauria"}
          />
        </div>
      }
    >
      <p>
        Au premier lancement, tu devras renseigner tes identifiants
        Aurion.&nbsp;
        <strong>Mauria</strong> les gardera en mémoire sur ton appareil pour te
        permettre de consulter tes informations sans avoir à te reconnecter à
        chaque fois 🚀.
      </p>
      <p>
        Lorsque tu souhaites charger tes données, <strong>Mauria</strong> se
        connecte à Aurion et récupère tes informations automatiquement&nbsp;
        <em>(En faisant ce que l'on appelle du scrapping 🤓)</em>.
        <br />
        Tu peux ensuite consulter tes notes, ton emploi du temps, tes absences,
        etc 🤩.
      </p>
      <p>
        <strong>Mauria</strong> ne stocke aucune donnée sur ses serveurs sans
        ton accord, tout est stocké sur ton appareil 🔒 !
      </p>
    </Section>
  );
};

export default Explanations;
