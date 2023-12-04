import Image from "next/image";
import { DOMAIN_NAME, PATH } from "../../../utils/constants"

const SectionFooter = () => {
  return (
    <div className="grid-footer">
      <div className="container-split">
        <a href={DOMAIN_NAME}>
          <Image
            className="container-img"
            src={`${PATH}/documents/uicon/custom/footerLogo_c.png`}
            alt={"something"}
            width={1920}
            height={307}
          // style={{ width: '18em', height: '6em' }}
          />
        </a>
      </div>
    </div>
  )
}

export default SectionFooter;