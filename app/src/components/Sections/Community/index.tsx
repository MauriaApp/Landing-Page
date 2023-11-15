import React from "react";
import Section from "@/components/Layout/Section";
import Card from "@/components/Layout/Card";
import Button from "@/components/Layout/Button";
import { Github } from "@icons";

const CommunityCard = () => (
  <Card
    title="Tu as un talent ou de bonnes idées ?"
    className={
      "flex-1 max-w-[340px] min-w-[300px] md:rotate-6 md:translate-y-8"
    }
  >
    <div>
      <p className={"text-base"}>
        Tu as des compétences en design, en code ou tu as des idées de
        fonctionnalités ?
      </p>
      <p className={"text-base"}>
        Viens contribuer au projet et fais-toi kiffer !
      </p>
    </div>
    <Button
      href={"https://github.com/MauriaApp"}
      variant={"dark"}
      className={"mt-4"}
    >
      <Github
        className={
          "w-8 h-8 group-hover:-rotate-12 transition ease-back duration-500"
        }
      />
      <span>Contribuer</span>
      <span className={"w-4"} />
    </Button>
  </Card>
);
const Community = () => {
  return (
    <Section
      title={"Qui gère Mauria ?"}
      sideContent={<CommunityCard />}
      id={"contribuer"}
    >
      <p>
        <strong>Mauria</strong> est une application <strong>Open-Source</strong>
        , ce qui signifie que tout le monde peut contribuer à son développement
        ! 🤝 <br />À l'origine, <strong>Mauria</strong> a été développée par
        deux étudiants de <strong>JUNIA ISEN</strong>, Milo et Louis. Mais
        aujourd'hui elle est maintenue par toute une communauté d'étudiants{" "}
        <strong>JUNIA</strong> 💪🏻.
      </p>
      <p>
        L'application a été développée en collaboration avec{" "}
        <strong>JUNIA</strong> mais ce sont bien les étudiants qui développent
        et maintiennent l'application !{" "}
      </p>
    </Section>
  );
};

export default Community;
