import Image from "next/image";
import { DOMAIN_NAME, PATH } from "../../../utils/constants"

const SectionLogo = () => {
  return (
    <div className="grid-logo grid-v2">
      <div className="logo-ver">
        <Image
          src={`${PATH}/documents/uicon/custom/secondaryLogo_Rc.png`}
          alt={"something"}
          width={1092}
          height={100}
          style={{ width: '100%' }}
        />
        <Image
          src={`${PATH}/documents/uicon/custom/secondaryLogo_Rc.png`}
          alt={"something"}
          width={1092}
          height={100}
          style={{ width: '100%' }}
        />
      </div>
      <div className="logo-hor">
        <a href={DOMAIN_NAME}>
          <Image
            src={`${PATH}/documents/uicon/custom/mainLogo_Rc.png`}
            alt={"something"}
            width={395}
            height={232}
            style={{ width: '100%' }}
          />
        </a>
      </div>
    </div>
  )
}

export default SectionLogo;