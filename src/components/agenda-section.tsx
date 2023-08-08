import { useEffect, useState } from "react";
import { Agenda } from "../../types/db/agenda";
import Card from "./card";
import axios from "axios";
import Loading from "./loading";

const AgendaSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api//agendas/');
        setSoutableau(splitInRowOf(Object.values(response.data), 3));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching agendas:', error);
      }
    };
    fetchData();
  }, []);

  const splitInRowOf = (array: Agenda[], chunkSize: number) => {
    const chunkedArray = [];
    let index = 0;
    while (index < array.length) {
      chunkedArray.push(array.slice(index, index + chunkSize));
      index += chunkSize;
    }
    const response = chunkedArray[0]
    setSoutableau(response);
    return response;
  }

  const [sousTableau, setSoutableau] = useState<Agenda[]>([]);


  if (isLoading) {
    return (
      <section className="bg-light">
        <h2 className="text-center ">Agenda</h2>
        <Loading />
      </section>
    )
  } else {
    return (
      <section className="bg-light">
        <div className="container">
          <h2 className="text-center ">Agenda</h2>
          <div className="split">
            {sousTableau[0].map!((element: Agenda, elementIndex: number) => (
              <Card
                handleSounds={() => { }}
                key={elementIndex}
                title={element.date}
                content={element.description}
                typeContent="AGENDA"
                description={element.address}
                bg="dark"
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

}

export default AgendaSection;