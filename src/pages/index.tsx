import TitleSection from "@/components/title-section";
import ThreeBlocSection from "@/components/three-bloc-section";
import TitleImageSection from "@/components/title-image-section";
import AgendaSection from "@/components/agenda-section";
import ScrollInformation from "@/bricks/composition/scroll-information";
import { MAIL, PHONE } from "../../utils/constants";
import Grid from "@/bricks/composition/grid";
import Card from "@/bricks/card";
import Image from "next/image";

import { CheatSheetImg } from "../helper/cheat-sheat-img";
import SectionBio from "@/bricks/composition/grid-bio";
import SectionAgenda from "@/bricks/composition/grid-agenda";
import SectionHeader from "@/bricks/composition/grid-header";
import SectionFooter from "@/bricks/composition/grid-footer";
import SectionLogo from "@/bricks/composition/grid-logo";
import FiltredSection from "@/bricks/composition/grid-content";




const Index = () => {
  return (
    <Grid>
      <ScrollInformation phone={PHONE} mail={MAIL} />
      <SectionHeader />
      <SectionAgenda />
      <SectionBio />
      <SectionLogo />
      <FiltredSection />
      <SectionFooter />
    </Grid >
  )
}

export default Index;