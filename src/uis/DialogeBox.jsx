import styled from "@emotion/styled";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteSongStart, setSongDialog } from "../features/songs/songSlice";
import { ClockLoader } from "react-spinners";
import Row from "./Row";
const StyledDialogeBox = styled.div`
  width: 100%;
  overflow: hidden;
  font-size: 1.4rem;
  border-radius: var(--border-radius-lg);
  padding: 5rem;
  background-color: var(--color-grey-900);
`;

const P = styled.p`
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;
function DialogeBox({ song }) {
  const dispatch = useDispatch();
  const { formStatus } = useSelector((state) => state.songs);
  return (
    <StyledDialogeBox>
      <P>Are you sure, you want to delete {song.title} song?</P>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(setSongDialog(false))}
          variation="secondary"
          size="medium"
          type="reset"
          disabled={formStatus == "loading"}
        >
          Cancel
        </Button>
        <Button
          disabled={formStatus == "loading"}
          size="medium"
          onClick={() => dispatch(deleteSongStart(song))}
        >
          {formStatus === "loading" ? (
            <Row>
              <ClockLoader color="var(--color-grey-0)" size="1.6rem" />
              <span>Deleting...</span>
            </Row>
          ) : (
            <span>Delete</span>
          )}
        </Button>
      </ButtonContainer>
    </StyledDialogeBox>
  );
}

export default DialogeBox;
