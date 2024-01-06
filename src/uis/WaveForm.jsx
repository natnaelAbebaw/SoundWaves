import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { HiMiniPlay } from "react-icons/hi2";
import { HiMiniStop } from "react-icons/hi2";
import { HiMiniPause } from "react-icons/hi2";
import Row from "./Row";
import { useDispatch, useSelector } from "react-redux";
import { pauseSong, playSong } from "../features/songs/songSlice";

const StyledWaveform = styled.div`
  grid-column: 2 / span 4;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  align-self: center;
`;

const WaveSurferTrack = styled.div`
  width: 100%;
  background-color: var(--color-grey-700);
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

function Waveform({ audio }) {
  const { playingStatus } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(0);
  const [stoped, setStop] = useState(false);
  const currentMinute = `${Math.trunc(currentTime / 60)}`.padStart(2, "0");
  const currentSecond = `${Math.trunc(currentTime % 60)}`.padStart(2, "0");

  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#8d9aaa",
      progressColor: "#d60007",
      barWidth: 1,
      cursorWidth: 1,
      barGap: 1,
      height: 40,
      responsive: true,
    });

    wavesurfer.load(audio.audioFile);

    wavesurferRef.current = wavesurfer;

    wavesurfer.on("ready", function () {
      wavesurfer.play();
    });

    wavesurfer.on("audioprocess", () => {
      setCurrentTime(wavesurfer.getCurrentTime());
    });

    return () => {
      wavesurfer.unAll();
      wavesurfer.destroy();
    };
  }, [audio, audio.id, audio.audioFile]);

  if (wavesurferRef.current && playingStatus === "playing") {
    wavesurferRef.current.play();
  } else if (wavesurferRef.current && playingStatus === "paused") {
    wavesurferRef.current.pause();
  }

  function play() {
    if (wavesurferRef.current) {
      setStop(false);
      wavesurferRef.current.play();
      dispatch(playSong());
    }
  }
  function pause() {
    if (wavesurferRef.current) {
      // setStop(false);
      wavesurferRef.current.pause();
      dispatch(pauseSong());
    }
  }

  function stop() {
    if (wavesurferRef.current) {
      wavesurferRef.current.stop();
      setStop(true);
      dispatch(pauseSong());
    }
  }

  return (
    <StyledWaveform>
      <Row flexGrow={1}>
        <Button onClick={stop}>
          <HiMiniStop
            color={stoped ? "var(--color-brand-800)" : "var(--color-grey-400)"}
          />
        </Button>

        {wavesurferRef.current?.isPlaying() ? (
          <Button onClick={pause}>
            <HiMiniPause
              color={
                stoped ? "var(--color-grey-400)" : "var(--color-brand-800)"
              }
            />
          </Button>
        ) : (
          <Button onClick={play}>
            <HiMiniPlay
              color={
                stoped ? "var(--color-grey-400)" : "var(--color-brand-800)"
              }
            />
          </Button>
        )}

        <Time>{`${currentMinute}:${currentSecond}`}</Time>

        <WaveSurferTrack ref={waveformRef}></WaveSurferTrack>

        <Time>{audio.duration}</Time>
      </Row>
    </StyledWaveform>
  );
}

export default Waveform;
