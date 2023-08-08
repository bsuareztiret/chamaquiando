import { FC } from "react";

type PROPS = {
  upTitle?: string;
  title?: string;
} & typeof defaultPROPS;

const defaultPROPS = {
  upTitle: "Lorem, ipsum dolor.",
  title: "Responsive layouts don’t have to be a struggle"
}

const TitleSection: FC<PROPS> = ({ upTitle, title }) => {
  return (
    <section className="bg-light text-center">
      <div className="container container--narrow">
        <p>{upTitle}</p>
        <h2>{title}</h2>
      </div>
    </section>
  )
}

export default TitleSection;