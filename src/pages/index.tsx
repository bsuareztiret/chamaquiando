import ScrollInformation from "@/bricks/composition/scroll-information";
import { MAIL, PHONE } from "../../utils/constants";
import Grid from "@/bricks/composition/grid";

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