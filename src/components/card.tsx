import Image from "next/image";
import { FC } from "react";
import { CheatSheetImg } from "../helper/cheat-sheat-img";
import { CheatSheetMusic } from "../helper/cheat-sheat-music";
import { CheatSheetVideo } from "../helper/cheat-sheat-video";
import Player from "./player";
import { Agenda } from "../../types/db/agenda";
import { PATH } from "../../utils/constants";

type PROPS = {
  handleSounds: (name: string) => void;
  title: string;
  content: string;
  typeContent: "VIDEO" | "MUSIC" | "TEXT" | "IMAGE" | "AGENDA" | "ADMIN"
  description: string;
  agenda?: {
    data: Agenda;
    remove: (a: Agenda) => void;
    update: (a: Agenda) => void;
  },
  bg?: "light" | "dark"
}

const Card: FC<PROPS> = ({ bg, agenda, handleSounds, title, content, description, typeContent }) => {

  return (
    <div className={`card bg-${bg}`}>
      <div className="split">
        {(typeContent !== "TEXT" && typeContent !== "AGENDA" && typeContent !== "ADMIN") && (
          <div className="container">
            <Image
              src={`${PATH}/documents/uicon/appbar.${typeContent.toLowerCase()}.gallery.svg`}
              alt="svg img"
              width={54}
              height={54} />
          </div>
        )
        }
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-content">
        {(typeContent === "TEXT" || typeContent === "ADMIN" || typeContent === "AGENDA") && (
          <div className={`${bg === "light" ? "container color-dark" : ""}`}>
            {content}
          </div>
        )}
        {typeContent === "IMAGE" && (
          <>
            <Image
              src={`${PATH}/documents/img/${CheatSheetImg[Number(content)].name}`}
              alt={CheatSheetImg[Number(content)].alt}
              width={CheatSheetImg[Number(content)].width}
              height={CheatSheetImg[Number(content)].height}
              style={{ width: '100%', height: 'auto' }}
            />
          </>
        )}
        {typeContent === "VIDEO" && (
          <>
            <Player
              typeContent="VIDEO"
              playerSrc={`${PATH}/documents/videos/${CheatSheetVideo[Number(content)].name}`}
              id={CheatSheetVideo[Number(content)].name}
            />
          </>
        )}
        {typeContent === "MUSIC" &&
          <>
            <div className="grayscale bg-dark padding-a radius">
              <Image
                src={`${PATH}/documents/audio/thumb/audio-thumb.png`}
                alt={""}
                width={1480}
                height={1176}
                style={{ width: '100%', height: 'auto' }}
              />
              <Player
                typeContent="MUSIC"
                playerSrc={`${PATH}/documents/audio/${CheatSheetMusic[Number(content)].name}`}
                id={CheatSheetMusic[Number(content)].name}
              />
            </div>
          </>
        }
        {agenda && typeContent === "ADMIN" && (
          <div className="split">
            <button onClick={() => agenda.update(agenda.data)}>update</button>
            <button onClick={() => agenda.remove(agenda.data)}>remove</button>
          </div>
        )}
      </div>
      {(typeContent === "MUSIC" || typeContent === "VIDEO" || typeContent === "IMAGE") && (
        <p className="card color-dark">
          {description}
        </p>
      )}
      {(typeContent === "TEXT" || typeContent === "ADMIN" || typeContent === "AGENDA") && (
        <div className={`split ${bg === "light" ? "color-dark" : ""}`}>
          <h6 className="card-title">{description}</h6>
        </div>
      )}
    </div>
  )
}

export default Card