import styled from "@emotion/styled";
// import { useRef } from "react";
// import { useSelector } from "react-redux";

const AudioPlayer = styled.audio`
  grid-column: 2 / span 4;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

// function AudioPlayer() {
//   return (
//     <StyledAudio
//       controls
//       autoPlay
//       src={playingSong.audioFile}
//       ref={audio}
//     ></StyledAudio>
//   );
// }

export default AudioPlayer;
