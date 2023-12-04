// import { useEffect, useState } from "react";
// import { Agenda } from "../../types/db/agenda";
// import Card from "./card";
// import axios from "axios";
// import Loading from "./loading";

// const AgendaSection = () => {
//   // const [isLoading, setIsLoading] = useState(true);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get('/api//agendas/');
//   //       setSoutableau(splitInRowOf(Object.values(response.data), 3));
//   //       setIsLoading(false);
//   //     } catch (error) {
//   //       console.error('Error fetching agendas:', error);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   // const splitInRowOf = (array: Agenda[], chunkSize: number) => {
//   //   const chunkedArray = [];
//   //   let index = 0;
//   //   while (index < array.length) {
//   //     chunkedArray.push(array.slice(index, index + chunkSize));
//   //     index += chunkSize;
//   //   }
//   //   const response = chunkedArray[0]
//   //   setSoutableau(response);
//   //   return response;
//   // }

//   // const [sousTableau, setSoutableau] = useState<Agenda[]>([{
//   //   _id: "ETRYTrh",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }, {
//   //   _id: "ETRYTrhdfsf",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }, {
//   //   _id: "ETRYTrhdfsf",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }, {
//   //   _id: "ETRYTrh",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }, {
//   //   _id: "ETRYTrhdfsf",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }, {
//   //   _id: "ETRYTrh",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }, {
//   //   _id: "ETRYTrhdfsf",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }, {
//   //   _id: "ETRYTrhdfsf",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }, {
//   //   _id: "ETRYTrh",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }, {
//   //   _id: "ETRYTrhdfsf",
//   //   date: "30-11-23",
//   //   address: "rue de l'amour, 26, 1000 bruxelles",
//   //   description: "salut la mifs"
//   // }]);


//   // if (isLoading) {
//   // return (
//   //   <section className="bg-light">
//   //     <h2 className="text-center ">Agenda</h2>
//   //     <Loading />
//   //   </section>
//   // )
//   // } else {
//   return (
//     <section className="bg-light">
//       <div className="container">
//         <h2 className="text-center ">Agenda</h2>
//       </div>
//     </section>
//   )
//   // }

// }

// export default AgendaSection;