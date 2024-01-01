import styled from "@emotion/styled";
import Song from "./Song";
import Column from "../../../uis/Column";
import Position from "../../../uis/Position";
import { useState } from "react";
import Heading from "../../../uis/Heading";
import Modal from "../../../uis/Model";
import SongForm from "./SongForm";
const StyledDiv = styled.div`
  padding: 2rem;
  grid-column: 1 / span 3;
  border: 1px solid var(--color-grey-700);
  border-radius: 5px;
  height: 65vh;
  position: relative;
`;

const Button = styled.button`
  color: var(--color-grey-0);
  font-size: 3rem;
  border: none;
  width: 5rem;
  display: inline-block;
  aspect-ratio: 1;
  background-color: var(--color-brand-800);
  cursor: pointer;
  border-radius: 50%;
`;

const Box = styled.div`
  border: 1px solid var(--color-grey-700);
  padding: 3px 5px;
  border-radius: 5px;
  background-color: var(--color-grey-800);
`;

const songList = [
  {
    songName: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    duration: "5:55",
  },
  {
    songName: "Imagine",
    artist: "John Lennon xdasjdsknafdsdjfd,d",
    album: "Imagine",
    duration: "3:03",
  },
  {
    songName: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    duration: "6:30",
  },
  {
    songName: "Thriller",
    artist: "Michael Jackson",
    album: "Thriller",
    duration: "5:58",
  },
  // Add more songs as needed
];

function SongList() {
  const [activeSong, setActiveSong] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <StyledDiv>
      <Position bottom="-5rem" left={"50%"}>
        <Button onClick={() => setShowModal((s) => !s)}>+</Button>
        {showModal && (
          <Modal onClose={setShowModal}>
            <SongForm onClose={setShowModal} />
          </Modal>
        )}
      </Position>
      <Position top="0" left={"50%"}>
        <Box>
          <Heading as="h3">Playlist</Heading>
        </Box>
      </Position>
      <Column gap="2px">
        {songList.map((song) => (
          <Song
            key={song.songName}
            activeSong={activeSong}
            setActiveSong={setActiveSong}
            song={song}
          />
        ))}
      </Column>
    </StyledDiv>
  );
}

export default SongList;
