// import axios from "axios";
// import { FormEvent, useState } from "react"
// import { IAgenda } from "../../models/agenda";
// import AuthLayout from "@/components/auth-layout";
// import Card from "@/components/card";

// type Agenda = {
//   _id: string,
//   date: string;
//   address: string;
//   description: string;
// }

// const Admin = () => {
//   const [date, setDate] = useState("");
//   const [address, setAddress] = useState("");
//   const [description, setDescription] = useState("");
//   const [agendas, setAgendas] = useState<Agenda[]>([]);

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const agendaObject = {
//       date,
//       address,
//       description
//     }
//     axios.post("/api/agendas/", agendaObject).then((e) => alert(e.data))
//   }

//   const getAgenda = () => {
//     axios.get("/api/agendas/").then((e) => {
//       const tmpArray: Agenda[] = [];
//       e.data.agendas.map((f: IAgenda) => tmpArray.push({ _id: String(f._id), date: f.date, address: f.address, description: f.description }))
//       setAgendas(tmpArray);
//     })
//   }

//   const update = (agenda: Agenda) => {
//     console.log("update", agenda._id);
//   }

//   const remove = (agenda: Agenda) => {
//     axios.delete(`/api/agendas/`, { params: { id: agenda._id } }).then((e) => {
//       console.log("remove", agenda._id);
//     })
//   }

//   const handleDb = (name: Agenda) => {
//     remove(name);

//   }
//   return (
//     <AuthLayout>
//       <div className="max-height bg-dark">
//         <section className="bg-dark">
//           <div className="container">
//             <h1>ADMIN</h1>
//             <h2>Create Agenda</h2>
//             <form className="card bg-light color-dark" onSubmit={(e) => handleSubmit(e)}>
//               <div>
//                 <label>Date</label>
//                 <input onChange={(e) => setDate(e.currentTarget.value)}></input>
//               </div>
//               <div>
//                 <label>Address</label>
//                 <input onChange={(e) => setAddress(e.currentTarget.value)}></input>
//               </div>
//               <div>
//                 <label>Description</label>
//                 <input onChange={(e) => setDescription(e.currentTarget.value)}></input>
//               </div>
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//           <section className="bg-dark">
//             <div className="container">
//               <h2 className="text-center ">Agenda</h2>
//               <div className="split">
//                 {agendas.map((e) => (
//                   <div key={e._id + e.date}>
//                     <Card
//                       key={e._id}
//                       title={e.date}
//                       content={e.address}
//                       typeContent="ADMIN"
//                       description={e.description}
//                       handleSounds={() => { }}
//                       agenda={{ data: e, update: update, remove: remove }}
//                       bg="light"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <button onClick={getAgenda}>Get Agendas</button>
//             </div>
//           </section>
//         </section>
//       </div>
//     </AuthLayout>
//   )
// }

// export default Admin;