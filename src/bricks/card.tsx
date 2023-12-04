import Image from "next/image";
import { FC } from "react";
import { CheatSheetImg } from "../helper/cheat-sheat-img";
import { CheatSheetMusic } from "../helper/cheat-sheat-music";
import { CheatSheetYoutube } from "../helper/cheat-sheat-youtube";

import { Agenda } from "../../types/db/agenda";
import Player from "./player";

type PROPS = {
  handleSounds: (name: string) => void;
  title: string;
  content: string;
  typeContent: "VIDEO" | "MUSIC" | "TEXT" | "IMAGE" | "AGENDA" | "ADMIN"
  description: string;
  agenda?: {
    index: number
    data: Agenda[];
    remove: (a: Agenda) => void;
    update: (a: Agenda) => void;
  },
  bg?: "light" | "dark" | "primary"
}

const choosePicto = (s: "VIDEO" | "MUSIC" | "IMAGE" | "ALL") => {
  if (s === "VIDEO") return "vdo"
  if (s === "MUSIC") return "msc"
  if (s === "IMAGE") return "img"
  return "all"
}

const Card: FC<PROPS> = ({ bg, agenda, handleSounds, title, content, description, typeContent }) => {
  // if (typeContent === "VIDEO") {
  //   console.log("CARD: typecontentVIDEO", CheatSheetYoutube[Number(content)].imgLink)
  // }
  return (
    <div className="container-item">
      <div className="grid-item-content-v2 design-card">
        {(typeContent === "IMAGE") && (
          <div className="grid-picture-v2">
            <Image
              src={`/documents/img/${CheatSheetImg[Number(content)].name}`}
              alt={CheatSheetImg[Number(content)].alt}
              width={CheatSheetImg[Number(content)].width}
              height={CheatSheetImg[Number(content)].height}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        )}
        {typeContent === "VIDEO" && (
          <a href={CheatSheetYoutube[Number(content)].YTLink} target="_blank">
            <div className="grid-picture-v2">
              <Image
                src={`/documents/img-video/${CheatSheetYoutube[Number(content)].name}`}
                alt={""}
                width={1480}
                height={1176}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </a>
        )}
        {typeContent === "MUSIC" &&
          <div>
            <div className="grid-picture-v2 grayscale">
              <Image
                src={`/documents/audio/thumb/audio-thumb.png`}
                alt={""}
                width={1480}
                height={1176}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        }
        <div className="agenda-box-top split-v3">
          {(typeContent === "MUSIC" || typeContent === "VIDEO" || typeContent === "IMAGE") && (
            <>
              <Image
                src={`/documents/uicon/custom/picto-${choosePicto(typeContent)}_c.png`}
                alt="png img"
                width={70}
                height={70} />
            </>
          )}
          {typeContent === "MUSIC" && (
            <>
              {CheatSheetMusic[Number(content)].name.split(".")[0]}
            </>
          )}
        </div>
        <div className="agenda-box-top-eyebrow">
          {(typeContent === "MUSIC") && (
            <>
              <Player
                typeContent="MUSIC"
                playerSrc={`/documents/audio/${CheatSheetMusic[Number(content)].name}`}
                id={CheatSheetMusic[Number(content)].name}
              />
            </>
          )}
          {(typeContent !== "MUSIC") && (
            <>
              {description}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card