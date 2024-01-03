import styled from "@emotion/styled";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSongDialog, setSongForm } from "../features/songs/songSlice";
import { space } from "styled-system";

const StyledModal = styled.div`
  ${space}
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  aspect-ratio: 1;
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-brand-700);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

function Modal({ children }) {
  const dispatch = useDispatch();
  const { songForm } = useSelector((state) => state.songs);
  return createPortal(
    <Overlay>
      <StyledModal width={songForm ? "60%" : "40%"}>
        <Button
          onClick={() =>
            songForm
              ? dispatch(setSongForm(false))
              : dispatch(setSongDialog(false))
          }
        >
          <HiXMark />
        </Button>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
