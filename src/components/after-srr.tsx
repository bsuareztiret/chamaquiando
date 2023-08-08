import { FC, useEffect, useState } from "react";

type PROPS = {
  children: JSX.Element | JSX.Element[] | false;
}

const AfterServerSideRendering: FC<PROPS> = ({ children }) => {
  const [isSsr, setIsSssr] = useState(true);

  useEffect(() => {
    setIsSssr(false);
  }, [])
  return (
    <>
      {isSsr === false && (
        children
      )}
    </>
  )
}

export default AfterServerSideRendering;