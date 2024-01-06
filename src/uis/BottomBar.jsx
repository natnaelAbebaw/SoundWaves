import styled from "@emotion/styled";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import Grid from "./Grid";
// import AudioPlayer from "./AudioPlayer";
import { useSelector } from "react-redux";
import Waveform from "./WaveForm";

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

const StyledHiOutlineArrowSmallLeft = styled(HiOutlineArrowSmallLeft)`
  font-size: 4rem;
  color: var(--color-grey-700);
  grid-column: 1 / span 1;
  align-self: center;
  justify-self: center;
`;

function BottomBar() {
  const { playingSong } = useSelector((state) => state.songs);

  return (
    <>
      {playingSong && (
        <StyledBottomBar>
          <Grid height="inherit" columns={10}>
            <StyledHiOutlineArrowSmallLeft />
            <Waveform audio={playingSong} />
          </Grid>
        </StyledBottomBar>
      )}
    </>
  );
}

export default BottomBar;
