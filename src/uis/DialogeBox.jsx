import styled from "@emotion/styled";
import Button from "./Button";

const StyledDialogeBox = styled.div`
  width: 50rem;
  overflow: hidden;
  font-size: 1.4rem;
  border-radius: var(--border-radius-lg);
  padding: 3rem 5rem;
  background-color: var(--color-grey-900);
`;

const P = styled.p`
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
function DialogeBox({ onClose }) {
  return (
    <StyledDialogeBox>
      <P>Are you sure, you want to delete this song?</P>
      <ButtonContainer>
        <Button
          onClick={() => onClose(false)}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button>Delete</Button>
      </ButtonContainer>
    </StyledDialogeBox>
  );
}

export default DialogeBox;
