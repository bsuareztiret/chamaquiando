// import Image from "next/image";
// import { FC } from "react";
// import { CheatSheetImg } from "../helper/cheat-sheat-img";
// import { CheatSheetMusic } from "../helper/cheat-sheat-music";
// import { CheatSheetVideo } from "../helper/cheat-sheat-video";
// import Player from "./player";
// import { Agenda } from "../../types/db/agenda";

// type PROPS = {
//   handleSounds: (name: string) => void;
//   title: string;
//   content: string;
//   typeContent: "VIDEO" | "MUSIC" | "TEXT" | "IMAGE" | "AGENDA" | "ADMIN"
//   description: string;
//   agenda?: {
//     data: Agenda;
//     remove: (a: Agenda) => void;
//     update: (a: Agenda) => void;
//   },
//   bg?: "light" | "dark" | "primary"
// }

// const Card: FC<PROPS> = ({ bg, agenda, handleSounds, title, content, description, typeContent }) => {

//   return (
//     <div className="container-item">
//       <div className="grid-item-content-v2 design-card">
//         {(typeContent === "TEXT" || typeContent === "ADMIN" || typeContent === "AGENDA") && (
//           <div className={`${bg === "light" ? "container color-dark" : ""}`}>
//             {content}
//           </div>
//         )}
//         {typeContent === "IMAGE" && (
//           <div className="grid-picture-v2">
//             <Image
//               src={`/documents/img/${CheatSheetImg[Number(content)].name}`}
//               alt={CheatSheetImg[Number(content)].alt}
//               width={CheatSheetImg[Number(content)].width}
//               height={CheatSheetImg[Number(content)].height}
//               style={{ width: '100%', height: 'auto' }}
//             />
//           </div>
//         )}
//         {typeContent === "VIDEO" && (
//           <div className="grid-picture-v2">
//             <Player
//               typeContent="VIDEO"
//               playerSrc={`/documents/videos/${CheatSheetVideo[Number(content)].name}`}
//               id={CheatSheetVideo[Number(content)].name}
//             />
//           </div>
//         )}
//         {typeContent === "MUSIC" &&
//           <div className="grid-picture-v2">
//             <div className="grayscale bg-dark padding-a radius">
//               <Image
//                 src={`/documents/audio/thumb/audio-thumb.png`}
//                 alt={""}
//                 width={1480}
//                 height={1176}
//                 style={{ width: '100%', height: 'auto' }}
//               />
//               <Player
//                 typeContent="MUSIC"
//                 playerSrc={`/documents/audio/${CheatSheetMusic[Number(content)].name}`}
//                 id={CheatSheetMusic[Number(content)].name}
//               />
//             </div>
//           </div>
//         }
//         {agenda && typeContent === "ADMIN" && (
//           <div className="split">
//             <button onClick={() => agenda.update(agenda.data)}>update</button>
//             <button onClick={() => agenda.remove(agenda.data)}>remove</button>
//           </div>
//         )}
//       </div>
//       {(typeContent === "MUSIC" || typeContent === "VIDEO" || typeContent === "IMAGE") && (
//         <p className="color-dark">
//           {description}
//         </p>
//       )}
//       {(typeContent === "TEXT" || typeContent === "ADMIN" || typeContent === "AGENDA") && (
//         <div className={`split ${bg === "light" ? "color-dark" : ""}`}>
//           <h6 >{description}</h6>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Card