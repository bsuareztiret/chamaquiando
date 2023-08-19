import { FC, useState } from "react";
import Card from "./card";
import { CheatSheetImg } from "../helper/cheat-sheat-img";
import { CheatSheetMusic } from "../helper/cheat-sheat-music";
import { CheatSheetVideo } from "../helper/cheat-sheat-video";

type PROPS = {
  setName: (name: string) => void,
  typeContent: "VIDEO" | "MUSIC" | "IMAGE" | "ALL",
}

const FiltredSection: FC<PROPS> = ({ typeContent, setName }) => {

  const splitInRowOf = (array: any, chunkSize: number) => {
    const chunkedArray = [];
    let index = 0;
    while (index < array.length) {
      chunkedArray.push(array.slice(index, index + chunkSize));
      index += chunkSize;
    }
    return chunkedArray;
  }

  const shuffleArray = (array: any[]) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const checkTypeContent = (e: any) => {
    if (typeof e.name === "string") {
      const type = e.name.split(".");
      if (type[1] === "jpg") return "IMAGE"
      if (type[1] === "mp3") return "MUSIC"
      if (type[1] === "mp4") return "VIDEO"
    }
    return "TEXT"
  }

  const [sousTableauxImg] = useState(splitInRowOf(shuffleArray(CheatSheetImg), 3));
  const [sousTableauxMusic] = useState(splitInRowOf(shuffleArray(CheatSheetMusic), 3));
  const [sousTableauxVideo] = useState(splitInRowOf(shuffleArray(CheatSheetVideo), 3));
  const [sousTableauxAll] = useState(splitInRowOf(shuffleArray(CheatSheetImg.concat(CheatSheetMusic, CheatSheetVideo)), 3));

  return (
    <>
      {typeContent === "MUSIC" && sousTableauxMusic.map((sousTableau, index) => (
        <div className="split" key={index}>
          {sousTableau.map((element: any, elementIndex: number) => (
            <Card
              handleSounds={setName}
              key={elementIndex}
              title={element.title}
              content={element.index}
              typeContent="MUSIC" description={""}
              bg="light"
            />
          ))}
        </div>
      ))}
      {typeContent === "IMAGE" && sousTableauxImg.map((sousTableau, index) => (
        <div className="split" key={index}>
          {sousTableau.map((element: any, elementIndex: number) => (
            <Card
              handleSounds={setName}
              key={elementIndex}
              title={element.title}
              content={element.index}
              typeContent="IMAGE" description={element.alt}
              bg="light"
            />
          ))}
        </div>
      ))}
      {typeContent === "VIDEO" && sousTableauxVideo.map((sousTableau, index) => (
        <div className="split" key={index}>
          {sousTableau.map((element: any, elementIndex: number) => (
            <Card
              handleSounds={setName}
              key={elementIndex}
              title={element.title}
              content={element.index}
              typeContent="VIDEO" description={element.alt}
              bg="light"
            />
          ))}
        </div>
      ))}
      {typeContent === "ALL" && sousTableauxAll.map((sousTableau, index) => (
        <div className="split" key={index}>
          {sousTableau.map((element: any, elementIndex: number) => (
            <Card
              handleSounds={setName}
              key={elementIndex}
              title={element.title}
              content={element.index}
              typeContent={checkTypeContent(element)} description={element.alt}
              bg="light"
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default FiltredSection