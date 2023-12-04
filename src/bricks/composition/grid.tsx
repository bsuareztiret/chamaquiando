import { FC } from "react";

type PROPS = {
  children: JSX.Element | JSX.Element[]
}

const Grid: FC<PROPS> = ({ children }) => {
  return (
    <div className="grid bg-light-l">
      {children}
    </div>
  )
}

export default Grid;