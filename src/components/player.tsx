// import React, { useState, useRef, FC } from 'react';

// type PROPS = {
//   typeContent: "VIDEO" | "MUSIC",
//   playerSrc: string,
//   id: string,
// }

// const Player: FC<PROPS> = ({ typeContent, playerSrc, id }) => {
//   const playerRef = useRef(null);
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     if (!isActive) {
//       setIsActive(true);
//       stopOtherSounds(id, 'audio');
//       stopAllYouTubeVideos()
//     } else {
//       setIsActive(false);
//     }
//   };

//   const stopOtherSounds = (currentId: string, type: 'video' | 'audio') => {
//     const videoElements = document.getElementsByTagName(type);
//     for (let i = 0; i < videoElements.length; i++) {
//       const video = videoElements[i];
//       const videoId = video.getAttribute('data-id');
//       if (videoId !== currentId && !video.paused) {
//         video.pause();
//         console.log("Je pause sound: ", video)
//       }
//     }
//   };

//   var stopAllYouTubeVideos = () => {
//     var iframes = document.querySelectorAll('iframe');
//     Array.prototype.forEach.call(iframes, iframe => {
//       iframe.contentWindow.postMessage(JSON.stringify({
//         event: 'command',
//         func: 'stopVideo'
//       }), '*');
//     });
//   }

//   return (
//     <div className="margin-t">
//       {typeContent === "MUSIC" && (
//         <audio
//           className="bg-dark padding-a"
//           ref={playerRef}
//           src={playerSrc}
//           controls
//           onPlaying={handleClick}
//           data-id={id}
//         />
//       )}
//       {typeContent === "VIDEO" && (
//         <iframe
//           src={"https://www.youtube.com/embed/" + playerSrc}
//           title={"coucou"}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//         // <video
//         //   className='video-content'
//         //   ref={playerRef}
//         //   src={playerSrc}
//         //   controls
//         //   onPlaying={handleClick}
//         //   data-id={id}
//         // />
//       )}
//     </div>
//   );
// };

// export default Player;