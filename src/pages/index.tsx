import TitleSection from "@/components/title-section";
import ThreeBlocSection from "@/components/three-bloc-section";
import TitleImageSection from "@/components/title-image-section";
import AgendaSection from "@/components/agenda-section";
import ScrollInformation from "@/components/scroll-information";
import { MAIL, PHONE } from "../../utils/constants";


const Index = () => {
  return (
    <>
      <div>
        <ScrollInformation phone={PHONE} mail={MAIL} />
        <TitleSection upTitle="Je vous présente" title="CHAMAQUIANDO" />
        <AgendaSection />
        <section className="bg-dark">
          <div className="container">
            <div className="split">
              <div>
                {/* Ici l'idée est de mettre un message pour inciter les gens à le contacter */}
                <h2>Made custom for you</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ipsum dicta fuga vero aliquam! Officiis?</p>
              </div>
            </div>
          </div>
        </section>
        <ThreeBlocSection title="Bio" />
        <section className="bg-dark">
          <div className="container">
            <div className="split">
              <div>
                {/* Ici l'idée est de mettre un message pour inciter les gens à le contacter */}
                <h2>Made custom for you</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ipsum dicta fuga vero aliquam! Officiis?</p>
              </div>
            </div>
          </div>
        </section>
        <TitleImageSection />
      </div>
    </>
  )
}

export default Index;