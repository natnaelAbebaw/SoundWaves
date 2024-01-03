import styled from "@emotion/styled";
import { HiOutlineBackward } from "react-icons/hi2";
import { HiOutlineForward } from "react-icons/hi2";
import { HiOutlinePauseCircle } from "react-icons/hi2";

import Column from "../../../uis/Column";
import Row from "../../../uis/Row";
import Grid from "../../../uis/Grid";
import { color } from "styled-system";
import { useDispatch, useSelector } from "react-redux";
import { setSongDialog, setSongForm } from "../songSlice";

const StyledSongDetail = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const ImageBox = styled.div`
  height: 37vh;
  & img {
    border-radius: var(--border-radius-lg);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-grey-200);
  text-transform: capitalize;
`;

const Duration = styled.div`
  font-size: 1.4rem;
  color: var(--color-grey-200);
  background-color: var(--color-grey-700);
  padding: 5px;
  border-radius: var(--border-radius-lg);
`;
const SubHeading = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-700);
  text-transform: uppercase;
`;

const Heading = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-300);
`;

const Button = styled.button`
  ${color}
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  color: var(--color-grey-0);
  font-weight: 500;
  padding: 5px 8px;
`;

function SongDetail() {
  const { currentSong } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  if (!currentSong) return <div> No song is Selected</div>;
  const { title, duration, album, genre, released, coverArt } = currentSong;
  return (
    <StyledSongDetail>
      <Row justifyContent="center" mb="1rem">
        <ImageBox>
          <img src={coverArt ?? "vayl.png"} alt="" />
        </ImageBox>
      </Row>

      <Row alignItems="flex-start" justifyContent="space-between">
        <Title>{title}</Title>
        <Duration>{duration}</Duration>
      </Row>

      <Row
        p={"1rem 7rem"}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <HiOutlineBackward fontSize={"3rem"} color="var(--color-grey-800)" />
        <HiOutlinePauseCircle fontSize={"4rem"} color="var(--color-grey-800)" />
        <HiOutlineForward fontSize={"3rem"} color="var(--color-grey-800)" />
      </Row>

      <Grid columns={3} justifyContent="space-between">
        <Column alignItems="center" gap={"3px"}>
          <SubHeading>Album</SubHeading>
          <Heading>{album}</Heading>
        </Column>
        <Column alignItems="center" gap={"3px"}>
          <SubHeading>Genre</SubHeading>
          <Heading>{genre}</Heading>
        </Column>
        <Column alignItems="center" gap={"3px"}>
          <SubHeading>Released</SubHeading>
          <Heading>{released}</Heading>
        </Column>
      </Grid>

      <Row mt="3rem" justifyContent="flex-end" gap="1rem">
        <Button
          onClick={() => dispatch(setSongForm(currentSong.id))}
          bg="var(--color-green-700)"
        >
          Edit
        </Button>
        <Button
          onClick={() => dispatch(setSongDialog(currentSong.id))}
          bg="var(--color-red-800)"
        >
          Delete
        </Button>
      </Row>
    </StyledSongDetail>
  );
}

export default SongDetail;
