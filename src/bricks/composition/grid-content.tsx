import { useState } from "react";
import AfterServerSideRendering from "../after-srr";
import ButtonFilter from "../section-button-content";
import FiltredSection from "../section-items-content";
import Image from "next/image";
import { CheatSheetYoutube } from "@/helper/cheat-sheat-youtube";



const TitleImageSection = () => {

  const handleFilterButton = (type: "MUSIC" | "IMAGE" | "VIDEO" | "ALL") => {
    setSelectedValue(type);
  }

  const [selectedValue, setSelectedValue] = useState<"MUSIC" | "IMAGE" | "VIDEO" | "ALL">("ALL");
  const [_, setSelectedSong] = useState("");

  const handleSelectedSong = (name: string) => {
    setSelectedSong(name);
  }


  return (
    <AfterServerSideRendering>
      <div className="grid-content container">
        <ButtonFilter selected={selectedValue} typeContent="ALL" handleFilterButton={handleFilterButton} />
        <ButtonFilter selected={selectedValue} typeContent="IMAGE" handleFilterButton={handleFilterButton} />
        <ButtonFilter selected={selectedValue} typeContent="MUSIC" handleFilterButton={handleFilterButton} />
        <ButtonFilter selected={selectedValue} typeContent="VIDEO" handleFilterButton={handleFilterButton} />
        <h2>{selectedValue}</h2>
        <div className="grid-v2">
          <FiltredSection setName={handleSelectedSong} typeContent={selectedValue} />
        </div>
      </div>
    </AfterServerSideRendering>
  )
}

export default TitleImageSection;