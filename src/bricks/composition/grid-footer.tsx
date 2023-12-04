import Image from "next/image";
import { PATH } from "../../../utils/constants"

const SectionFooter = () => {
  return (
    <div className="grid-footer">
      <div className="container-split">
        <Image
          className="container-img"
          src={`${PATH}/documents/uicon/custom/footerLogo_c.png`}
          alt={"something"}
          width={1920}
          height={307}
        // style={{ width: '18em', height: '6em' }}
        />
      </div>
    </div>
  )
}

export default SectionFooter;