import Image from "next/image";
import { FC } from "react";

type PROPS = {
  selected: "VIDEO" | "MUSIC" | "IMAGE" | "ALL",
  typeContent: "VIDEO" | "MUSIC" | "IMAGE" | "ALL",
  handleFilterButton: (type: "MUSIC" | "IMAGE" | "VIDEO" | "ALL") => void
}

const ButtonFilter: FC<PROPS> = ({ selected, typeContent, handleFilterButton }) => {
  return (
    <button className={`${typeContent === selected ? "bg-dark-m" : "card bg-light-m"}`} onClick={() => handleFilterButton(typeContent)}>
      {typeContent === "IMAGE" && (
        <div className="split-v2">
          <Image
            src={`/documents/uicon/custom/picto-img_c.png`}
            alt="png img"
            width={70
            }
            height={70
            } />
        </div>
      )}
      {typeContent === "MUSIC" && (
        <div className="split-v2">
          <Image
            src={`/documents/uicon/custom/picto-msc_c.png`}
            alt="png img"
            width={70
            }
            height={70
            } />
        </div>
      )}
      {typeContent === "VIDEO" && (
        <div className="split-v2">
          <Image
            src={`/documents/uicon/custom/picto-vdo_c.png`}
            alt="png img"
            width={70
            }
            height={70
            } />
        </div>
      )}
      {typeContent === "ALL" && (
        <div className="split-v2">
          <Image
            src={`/documents/uicon/custom/picto-all_c.png`}
            alt="png img"
            width={70
            }
            height={70
            } />
        </div>
      )}
    </button>
  )
}

export default ButtonFilter;