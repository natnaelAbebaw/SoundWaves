import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { HiMiniStop } from "react-icons/hi2";
import Row from "./Row";
import { background } from "styled-system";

const StyledAudioPlayer = styled.div`
  --player-button-width: 5rem;
  grid-column: 2 / span 4;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  align-self: center;
`;
const Button = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
`;
const Time = styled.div`
  font-size: 1.4rem;
  color: var(--color-grey-200);
`;
const MusicProgressBar = styled.input`
  ${background}
  -webkit-appearance: none;
  width: calc(100% - var(--player-button-width));
  height: 2rem;
  border-radius: 5px;
  background-image: linear-gradient(#de5e97, #de5e97);
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: all 0.1s;
    background-color: #a94672;
  }

  &::-webkit-slider-thumb:hover {
    background-color: #943f65;
  }

  &:hover::-webkit-slider-thumb {
    opacity: 1;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

function AudioPlayer({ playingSong }) {
  const [playing, setPlaying] = useState(true);
  const [timeLine, setTimeLine] = useState(0);
  const audio = useRef(null);
  const remainingTime = audio.current?.duration - audio.current?.currentTime;
  const currentMinute = Math.trunc(audio.current?.currentTime / 60);
  const currentSecond = Math.trunc(audio.current?.currentTime % 60);
  const remainingMinute = Math.trunc(remainingTime / 60);
  const remainingSecond = Math.trunc(remainingTime % 60);
  function play() {
    audio.current.play();
    setPlaying(true);
  }

  function pause() {
    audio.current.pause();
    setPlaying(false);
  }

  function changeTimeLine() {
    const timeLinePosition =
      100 * (audio.current.currentTime / audio.current.duration);
    setTimeLine(timeLinePosition);
  }

  function changeSeek(e) {
    audio.current.currentTime =
      (audio.current.duration * Number(e.target.value)) / 100;
  }

  return (
    <StyledAudioPlayer>
      <audio
        autoPlay
        src={playingSong.audioFile}
        ref={audio}
        onTimeUpdate={changeTimeLine}
      />
      <Row>
        <Button onClick={pause}>
          <HiMiniStop
            color={
              !playing ? "var(--color-brand-700)" : "var(--color-grey-500)"
            }
          />
        </Button>
        <Button onClick={play}>
          <HiMiniPlay
            color={playing ? "var(--color-brand-700)" : "var(--color-grey-500)"}
          />
        </Button>
        <Time>{`${`${currentMinute}`.padStart(
          2,
          "0"
        )}:${`${currentSecond}`.padStart(2, "0")}`}</Time>
        <MusicProgressBar
          type="range"
          min="0"
          max="100"
          backgroundSize={`${timeLine}% 100%`}
          value={timeLine}
          onChange={changeSeek}
        />
        <Time>{`${`${remainingMinute}`.padStart(
          2,
          "0"
        )}:${`${remainingSecond}`.padStart(2, "0")}`}</Time>
      </Row>
    </StyledAudioPlayer>
  );
}

export default AudioPlayer;
