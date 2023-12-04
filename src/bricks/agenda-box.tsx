import { FC } from "react";
import { Agenda } from "../../types/db/agenda";

type PROPS = Agenda

const BoxAgenda: FC<PROPS> = ({ date, hours, address, description, crew, title }) => {
  return (
    <div className="container-item agenda-box bg-light-s" key={`${date}${hours}${address}${title}`}>
      <div className="agenda-box-top">
        <div className="agenda-box-top-eyebrow">
          {hours}
        </div>
        {date}
      </div>
      <div className="agenda-box-title">
        {title}
      </div>
      <div className="agenda-box-labels">
        {crew.map((e) => {
          return (<span className="agenda-label" key={`${date}${hours}${address}`}>{e}</span>)
        })}
      </div>
      <div className="agenda-box-description">
        <p>{address}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BoxAgenda;