import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSongForm } from "../features/songs/songSlice";
import Position from "./Position";
import Modal from "./Model";
import SongForm from "../features/songs/components/SongForm";
import Heading from "./Heading";

const StyledDiv = styled.div`
  padding: 3rem 3rem 0;
  /* padding: 2rem 5rem 0; */
  grid-column: 1 / span 3;
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
  box-shadow: 0 0 8px 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.04);
  }
  &:active {
    transform: scale(0.96);
  }
`;

const Box = styled.div`
  background-color: var(--color-grey-800);
`;

function LeftBox({ children }) {
  const { songForm } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  return (
    <StyledDiv>
      <Position bottom="-3rem" left={"50%"} zIndex={200}>
        <Button onClick={() => dispatch(setSongForm("add"))}>+</Button>
        {songForm === "add" && (
          <Modal>
            <SongForm />
          </Modal>
        )}
      </Position>
      <Position top="0%" left={"50%"} zIndex={200}>
        <Box>
          <Heading as="h3" m={0}>
            Playlist
          </Heading>
        </Box>
      </Position>
      {children}
    </StyledDiv>
  );
}

export default LeftBox;
