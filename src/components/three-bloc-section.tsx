import React from "react";
import { FC } from "react";
import Card from "./card";

type PROPS = {
  title: string;
  // blocOne: string;
  // blocTwo?: string;
  // blocThree?: string;
  // } & typeof defaultPROPS
}

const defaultPROPS = {
  title: "Lorem, ipsum dolor.",
  blocOne: "Ramiro Suarez,  mas conocido como Chama, es uno de los primeros musicos Cubanos a instalarse en Belgica. Chama siempre se ha rodeado de los mejores musicos de la escena Latino Americana, y esta conciderado como uno de los grandes valores de la Salsa. Chama es autor-compositor-interprete y a hecho millares de conciertos acompaÒado de artistas de todas partes del mundo tales como : Khadja Nin, Francis Goya, Two Men Sounds, y muchos otros. Si desea organisar fiesta, cumpleaÒos, Boda ? Con un ambiente de Salsa, Brasilero, Merengue, Bachata, Reggaetoon, Musica CaribeÒa. Posibilidad de obtener presupuesto, segun la fomula : Trio, Cuarteto, o Banda.",
  blocTwo: "Ramiro Suarez, mieux connu sous le nom de Chama, est un des premiers musiciens Cubains ‡ s'installer en Belgique. Chama est entourÈ par les meilleurs musiciens de la scËne Latino  AmÈricaine, et est considÈrÈ comme une valeur s˚re de la Salsa. Chama est auteur-compositeur-interprËte et a donnÈ des milliers de concerts accompagnÈ d'artistes de tous les coins du monde tels que: Khadja Nin, Francis Goya, Two Men Sounds, et bien d'autres. Si vous souhaitez organiser une fÍte, un anniversaire, un mariage ? Dans une ambiance Salsa, BrÈsilien, Merengue, Bachata, Reggaetoon, Caribbean Music. Demandez un devis ‡ la Carte: Trio, Quartet, ou Band.",
  blocThree: "Ramiro Suarez, beter gekend als Chama, is ÈÈn van de eerste Cubaanse muzikanten die zich in BelgiÎ vestigde. Chama wordt omringd door de beste Latino-Amerikaanse muzikanten en wordt beschouwd als een meerwaarde in Salsa. Chama is zowel auteur, componist als zanger en heeft reeds duizenden concerten gegeven met artiesten van over de hele wereld zoals: Khadja Nin, Francis Goya, Two Men Sounds en vele anderen. Indien u een feest, een verjaardag of een huwelijk wenst te vieren in een Salsa-, Braziliaanse-, Merengue-, Bachata-, Reggaetoon- of Caraibische. omgeving, aarzel dan zeker niet een offerte te vragen ì‡ la carteî: Trio, Quartet of Band.",
  blocFour: "Ramiro Suarez, better known as Chama, is one of the first Cuban musicians who settled down in Belgium. Chama is surrounded by the best American Latino musicians and is considered as a talented Salsa-expert. Chama is an author, a composer and a performer and has already played at thousands of concerts accompanied by artists from all over the world e.g: Khadja Nin, Francis Goya, Two Men Sounds, and many more. Would you like to organize a party, an anniversary or a wedding in a Salsa, Brasilian, Merengue, Bachata, Reggaetoon, Caribbean atmosphere? Then don't hesitate to contact us for an offer ì‡ la carteî: Trio, Quartet or Band.",
}

const ThreeBlocSection: FC<PROPS> = ({ title }) => {
  return (
    <section>
      <div className="container">
        <h2 className="text-center">{title}</h2>
        <div className="split">
          <Card title={"Espagnole"} content={defaultPROPS.blocOne} typeContent="TEXT" description="" handleSounds={() => { }} />
          <Card title={"Français"} content={defaultPROPS.blocTwo} typeContent="TEXT" description="" handleSounds={() => { }} />
        </div>
        <div className="split">
          <Card title={"Neederlands"} content={defaultPROPS.blocThree} typeContent="TEXT" description="" handleSounds={() => { }} />
          <Card title={"English"} content={defaultPROPS.blocFour} typeContent="TEXT" description="" handleSounds={() => { }} />
        </div>
      </div>
    </section>
  )
}

export default ThreeBlocSection;