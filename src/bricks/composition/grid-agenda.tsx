import { Agenda } from "../../../types/db/agenda";
import { CheatSheetImg } from "../../helper/cheat-sheat-img";
import BoxAgenda from "../agenda-box";
import Card from "../card";

const agenda: Agenda[] = [{
  _id: "25",
  title: "BXL",
  address: "• rue du love 67, liege 4000",
  date: "12.07.24",
  hours: "8pm-2am",
  description: "Soirée organisé dans le cadre de la fête de la musique",
  crew: ["Chama", "Frank", "Gino"],
}, {
  _id: "27",
  title: "SEA",
  address: "• rue du love 67, liege 4000",
  date: "12.07.24",
  hours: "8pm-2am",
  description: "Petit concert entre potes.",
  crew: ["Chama", "Frank", "Gino"],
}, {
  _id: "26",
  title: "WAL",
  address: "• rue du love 67, liege 4000",
  date: "12.07.24",
  hours: "8pm-2am",
  description: "Pour LOU",
  crew: ["Chama", "Frank", "Gino"],
}, {
  _id: "28",
  title: "EUR",
  address: "• rue du love 67, liege 4000",
  date: "12.07.24",
  hours: "8pm-2am",
  description: "La famille, y'a pas que ça de vrai, y'a l'alcool aussi",
  crew: ["Chama", "Frank", "Gino"],
}]

// const agenda: Agenda[] = []

const SectionAgenda = () => {
  return (
    <div className="grid-agenda container grid-v2 bottom-spacing">
      {agenda.map!((e, i: number) => {
        return (
          <BoxAgenda key={`${e._id}${i}`} {...e} />
        )
      })}
    </div>
  )
}

export default SectionAgenda;