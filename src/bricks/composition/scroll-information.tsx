import { FC } from "react";

type PROPS = {
  phone: string;
  mail: string;
}

const ScrollInformation: FC<PROPS> = ({ phone, mail }) => {
  const linkToPhoneAndMail =
    <span>
      <a href={`mailto:${mail}`}>{mail.toLowerCase() + " | "}</a>
      <a href={`tel:${phone}`}>{phone + " | "}</a>
      &nbsp;
    </span>

  return (
    <div id="Contact">
      <div className="marquee">
        {linkToPhoneAndMail}
      </div>
      <div className="marquee">
        {linkToPhoneAndMail}
      </div>
      <div className="marquee">
        {linkToPhoneAndMail}
      </div>
      <div className="marquee">
        {linkToPhoneAndMail}
      </div>
      <div className="marquee">
        {linkToPhoneAndMail}
      </div>
      <div className="marquee">
        {linkToPhoneAndMail}
      </div>
    </div>
  )
}

export default ScrollInformation