import Image from "next/image";
import { PATH } from "../../../utils/constants"

const SectionHeader = () => {
  return (
    <div className="grid-header">
      <div className="container-split">
        <a className="breathe-spacing" href="http://localhost:3000/" >
          <Image
            className="container"
            src={`${PATH}/documents/uicon/custom/mainLogo_c.png`}
            alt={"something"}
            width={395}
            height={232}
            style={{ width: '16em', height: '8em' }}
          />
        </a>
        {/* <h1 className="container container-item">salsa band</h1> */}
        {/* <p className="container container-item">helo you you can a super band and command them for your private party if you want</p> */}
      </div>
    </div>
  )
}

export default SectionHeader;