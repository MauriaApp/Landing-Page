import Section from "@/components/Layout/Section";
import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <Section
      id={"présentation"}
      title={"Mauria c'est quoi ?"}
      className={"flex flex-col gap-4 justify-center"}
      sideContent={
        <div className={"rounded-3xl overflow-hidden"}>
          <Image
            className={"w-80 h-80 sm:w-96 sm:h-96 object-cover"}
            src={"/images/Homescreen.webp"}
            width={1200}
            height={1200}
            alt={"Page d'accueil de Mauria"}
          />
        </div>
      }
    >
      <p>
        <strong>Mauria</strong>, c'est l'application qu'il te faut pour
        t'accompagner et simplifier ta vie à JUNIA.
        <br />
        Consulte ton emploi du temps, tes notes, tes absences et bien plus
        encore !
      </p>
      <p>
        Tu connectes ton compte Aurion au premier lancement de l'application et
        Mauria se charge du reste ! 💪🏻 <br />
        Plus besoin de te connecter et attendre 10 minutes sur Aurion à chaque
        fois pour consulter tes informations 😴 : Mauria le fait pour toi et
        rend tes données disponibles même lorsque tu es hors-ligne.
      </p>

      <p>
        <em>
          Par contre, n'oublies pas d'actualiser tes données régulièrement pour
          les garder à jour ! 😜
        </em>
      </p>
    </Section>
  );
};

export default Introduction;
