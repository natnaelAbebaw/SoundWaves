import styled from "@emotion/styled";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
// import { HiMiniPlay } from "react-icons/hi2";
// import { HiMiniStop } from "react-icons/hi2";

import Grid from "./Grid";
// import Row from "./Row";
import AudioPlayer from "./AudioPlayer";
import { useRef } from "react";
import { useSelector } from "react-redux";

const StyledBottomBar = styled.div`
  width: 100%;
  height: 10vh;
  box-shadow: var(--shadow-lg);
  position: fixed;
  bottom: 0;
  z-index: 500;
  box-shadow: -2px 0 50px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(
    102deg,
    var(--color-grey-0) 10%,
    var(--color-grey-800) 10% 50%,
    var(--color-brand-700) 50% 90%,
    var(--color-grey-800) 90%
  );
`;

// const Time = styled.div`
//   font-size: 1.4rem;
//   color: var(--color-grey-200);
// `;
// const MusicProgressBar = styled.div`
//   flex-grow: 1;
//   height: 5px;
//   width: 100%;
//   background-color: var(--color-brand-700);
// `;

const StyledHiOutlineArrowSmallLeft = styled(HiOutlineArrowSmallLeft)`
  font-size: 4rem;
  color: var(--color-grey-700);
  grid-column: 1 / span 1;
  align-self: center;
  justify-self: center;
`;

function BottomBar() {
  const { playingSong } = useSelector((state) => state.songs);
  const audio = useRef();
  return (
    <>
      {playingSong && (
        <StyledBottomBar>
          <Grid height="inherit" columns={10}>
            <StyledHiOutlineArrowSmallLeft />
            <AudioPlayer
              controls
              autoPlay
              src={playingSong.audioFile}
              ref={audio}
            />
          </Grid>
        </StyledBottomBar>
      )}
    </>
  );
}

export default BottomBar;
