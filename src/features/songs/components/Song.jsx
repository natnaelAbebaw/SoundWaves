import { HiMiniPlay } from "react-icons/hi2";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

import Row from "../../../uis/Row";
import Column from "../../../uis/Column";
import styled from "@emotion/styled";
import { space } from "styled-system";
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import Dropdown from "../../../uis/DropDown";
import Window from "../../../uis/Window";
import Modal from "../../../uis/Model";
import DialogeBox from "../../../uis/DialogeBox";

const StyledSong = styled.div`
  padding: 1rem 1.4rem;
  transform: skewX(-10deg);
  z-index: 1;
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-grey-700);
      border-radius: 3px;
      transition: all 0.4s;
      z-index: 2;
    `}
  &:hover {
    background-color: var(--color-grey-700);
    border-radius: 3px;
    transition: all 0.4s;
  }
`;
const InvertSkew = styled.div`
  transform: skewX(10deg);
  z-index: 1;
`;
const StyledButton = styled.button`
  background: none;
  border: none;
`;

const StyledButton2 = styled.button`
  background: none;
  border: none;
  padding: 5px 8px;
  font-size: 1.4rem;

  &:hover {
    background-color: var(--color-grey-800);
    border-radius: 3px;
    transition: all 0.4s;
  }
`;
const StyledHiMiniPlay = styled(HiMiniPlay)`
  font-size: 2.4rem;
  color: var(--color-grey-500);
  /* color: var(--color-brand-700); */
`;

const StyledTitle = styled.h3`
  font-size: 1.6rem;
  text-overflow: ellipsis;
  max-width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
`;

const StyledSubtitle = styled.h4`
  ${space}
  font-size: 1.4rem;
  color: var(--color-grey-500);
  text-overflow: ellipsis;
  max-width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
`;

const StyledImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

function Song({ song, activeSong, setActiveSong }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMenu, setShowMenu]);

  return (
    <StyledSong
      active={activeSong === song.songName}
      onClick={() => setActiveSong(song.songName)}
    >
      <InvertSkew>
        <Row>
          <StyledImage src="vite.svg" alt="" />
          <StyledButton>
            <StyledHiMiniPlay />
          </StyledButton>
          <Row justifyContent="space-between" flexGrow="1">
            <Column gap="0">
              <StyledTitle>{song.songName}</StyledTitle>
              <StyledSubtitle mt={"-5px"}>{song.artist}</StyledSubtitle>
            </Column>
            <StyledSubtitle>{song.duration}</StyledSubtitle>
          </Row>
          <Dropdown>
            <StyledButton
              onClick={() => {
                setShowMenu((s) => !s);
              }}
            >
              <IoEllipsisVerticalSharp />
            </StyledButton>
            {showMenu && (
              <Window refs={modalRef}>
                <Column gap="5px">
                  <StyledButton2>
                    <Row gap="1rem">
                      <IoCreateOutline />
                      <span>Edit</span>
                    </Row>
                  </StyledButton2>
                  <StyledButton2
                    onClick={() => {
                      setShowModal((s) => !s);
                    }}
                  >
                    <Row gap="1rem">
                      <IoTrashOutline />
                      <span>Delete</span>
                    </Row>
                  </StyledButton2>
                </Column>
              </Window>
            )}
          </Dropdown>
          {showModal && (
            <Modal onClose={setShowModal}>
              <DialogeBox onClose={setShowModal} />
            </Modal>
          )}
        </Row>
      </InvertSkew>
    </StyledSong>
  );
}

export default Song;
