import Image from "next/image";
import { FC } from "react";
import { PATH } from "../../utils/constants"

type PROPS = {
  selected: "ES" | "FR" | "NL" | "UK",
  typeContent: "ES" | "FR" | "NL" | "UK",
  handleFilterButton: (type: "ES" | "FR" | "NL" | "UK") => void
}

const ButtonBio: FC<PROPS> = ({ selected, typeContent, handleFilterButton }) => {
  return (
    <button className={`${typeContent === selected ? "bg-dark-m" : "card bg-light-m"}`} onClick={() => handleFilterButton(typeContent)}>
      {typeContent === "ES" && (
        <div className="split-v2">
          <Image
            src={`${PATH}/documents/uicon/custom/languageEs_c.png`}
            alt="png img"
            width={70
            }
            height={70
            } />
        </div>
      )}
      {typeContent === "FR" && (
        <div className="split-v2">
          <Image
            src={`${PATH}/documents/uicon/custom/languageFr_c.png`}
            alt="png img"
            width={70
            }
            height={70
            } />
        </div>
      )}
      {typeContent === "NL" && (
        <div className="split-v2">
          <Image
            src={`${PATH}/documents/uicon/custom/languageNl_c.png`}
            alt="png img"
            width={70
            }
            height={70
            } />
        </div>
      )}
      {typeContent === "UK" && (
        <div className="split-v2">
          <Image
            src={`${PATH}/documents/uicon/custom/languageUk_c.png`}
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

export default ButtonBio;