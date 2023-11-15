import React from "react";
import Section from "@/components/Layout/Section";
import DownloadCard from "@/components/Layout/Card/DownloadCard";

const Download = () => {
  return (
    <Section
      id={"téléchargement"}
      title={"Alors, ça te tente ?"}
      sidePosition={"left"}
      sideContent={<DownloadCard />}
    >
      <p>
        Envie de faire de <strong>Mauria</strong> ton nouveau pote ? <br />
        Télécharge l'application dès maintenant !<br />
      </p>
      <p>
        Disponible sous <strong>iOS</strong> et <strong>Android</strong> !
      </p>
      <p>
        <em>
          (Psssst si ça l'App plaît, n'hésite pas à nous laisser un petit
          commentaire ⭐️)
        </em>
      </p>
    </Section>
  );
};

export default Download;
