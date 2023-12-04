import { useState } from "react";
import AfterServerSideRendering from "./after-srr";

import ButtonFilter from "./button-filter";
import FiltredSection from "./filtred-section";


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
      <section className="bg-light">
        <div className="container">
          <ButtonFilter selected={selectedValue} typeContent="ALL" handleFilterButton={handleFilterButton} />
          <ButtonFilter selected={selectedValue} typeContent="IMAGE" handleFilterButton={handleFilterButton} />
          <ButtonFilter selected={selectedValue} typeContent="MUSIC" handleFilterButton={handleFilterButton} />
          <ButtonFilter selected={selectedValue} typeContent="VIDEO" handleFilterButton={handleFilterButton} />
          <FiltredSection setName={handleSelectedSong} typeContent={selectedValue} />
        </div>
      </section>
    </AfterServerSideRendering>
  )
}

export default TitleImageSection;