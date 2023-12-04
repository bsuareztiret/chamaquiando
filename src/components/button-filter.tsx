// import Image from "next/image";
// import { FC } from "react";

// type PROPS = {
//   selected: "VIDEO" | "MUSIC" | "IMAGE" | "ALL",
//   typeContent: "VIDEO" | "MUSIC" | "IMAGE" | "ALL",
//   handleFilterButton: (type: "MUSIC" | "IMAGE" | "VIDEO" | "ALL") => void
// }

// const ButtonFilter: FC<PROPS> = ({ selected, typeContent, handleFilterButton }) => {
//   return (
//     <button className={`${typeContent === selected ? "" : "card bg-light"}`} onClick={() => handleFilterButton(typeContent)}>
//       {typeContent === "IMAGE" && (
//         <div className="split">
//           <Image
//             src={`${PATH}/documents/uicon/appbar.image.gallery.svg`}
//             alt="svg img"
//             width={35}
//             height={35} />
//         </div>
//       )}
//       {typeContent === "MUSIC" && (
//         <div className="split">
//           <Image
//             src={`${PATH}/documents/uicon/appbar.music.gallery.svg`}
//             alt="svg img"
//             width={35}
//             height={35} />
//         </div>
//       )}
//       {typeContent === "VIDEO" && (
//         <div className="split">
//           <Image
//             src={`${PATH}/documents/uicon/appbar.video.gallery.svg`}
//             alt="svg img"
//             width={35}
//             height={35} />
//         </div>
//       )}
//       {typeContent === "ALL" && (
//         <div className="split">
//           <Image
//             src={`${PATH}/documents/uicon/appbar.image.gallery.svg`}
//             alt="svg img"
//             width={35}
//             height={35} />
//           <Image
//             src={`${PATH}/documents/uicon/appbar.music.gallery.svg`}
//             alt="svg img"
//             width={35}
//             height={35} />
//           <Image
//             src={`${PATH}/documents/uicon/appbar.video.gallery.svg`}
//             alt="svg img"
//             width={35}
//             height={35} />
//         </div>
//       )}
//     </button>
//   )
// }

// export default ButtonFilter;