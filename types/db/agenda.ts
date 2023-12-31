export type Agenda = {
  map?(arg0: (element: Agenda, elementIndex: number) => import("react").JSX.Element): import("react").ReactNode;
  _id: string;
  title: string;
  date: string;
  hours: string;
  address: string;
  description: string;
  crew: string[]
}