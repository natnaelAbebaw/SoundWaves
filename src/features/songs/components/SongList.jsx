import styled from "@emotion/styled";
import Song from "./Song";
import Column from "../../../uis/Column";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSongsStart } from "../songSlice";
import { ScaleLoader } from "react-spinners";
const StyledDiv = styled.div`
  padding: 2rem;
  grid-column: 1 / span 3;
  height: 70vh;
  position: relative;
  overflow-y: auto;
`;

const SpinnerBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const NoSong = styled.div`
  text-align: center;
  color: var(--color-grey-500);
`;
function SongList() {
  const { status, songs, error } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsStart());
  }, [dispatch]);

  return (
    <StyledDiv>
      {status === "loading" && (
        <SpinnerBox>
          {" "}
          <ScaleLoader alig color="var(--color-brand-700)" />{" "}
        </SpinnerBox>
      )}
      {status === "failure" && <div>{error}</div>}
      {status === "success" && (
        <Column gap="2px">
          {songs.map((song) => (
            <Song key={song.id} song={song} />
          ))}
          {songs.length === 0 && (
            <NoSong>No songs, click the plus button to add a song.</NoSong>
          )}
        </Column>
      )}
    </StyledDiv>
  );
}

export default SongList;
