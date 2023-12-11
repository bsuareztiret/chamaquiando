import Image from "next/image";
import { DOMAIN_NAME, PATH } from "../../../utils/constants"

const SectionFooter = () => {
  return (
    <div className="grid-footer">
      <a className="container-split" href={DOMAIN_NAME}>
        <Image
          className="container-img"
          src={`${PATH}/documents/uicon/custom/footerLogo_Rc.png`}
          alt={"something"}
          width={1920}
          height={307}
        // style={{ width: '18em', height: '6em' }}
        />
      </a>
    </div>
  )
}

export default SectionFooter;