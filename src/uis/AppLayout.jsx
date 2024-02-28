import SongList from "../features/songs/components/SongList";
import Grid from "./Grid";
import LeftBox from "./LeftBox";
import Position from "./Position";
import StyledApp from "./StyledApp";
import StyledImage from "./StyledImage";
import TopBar from "./TopBar";
import RightBox from "./RightBox";
import SongDetail from "../features/songs/components/SongDetail";
import BottomBar from "./BottomBar";
import HalfCircle from "./HalfCircle";

function AppLayout() {
  return (
    <div>
      <StyledApp>
        <Position width={"38rem"} top={"50%"} left={"50%"}>
          <StyledImage src="vayl.png" />
          <HalfCircle />
          <Position width={"23.5rem"} top={"-27%"} left={"65%"}>
            <StyledImage src="tonearm4.png" />
          </Position>
        </Position>

        <BottomBar />

        <Grid columns={8}>
          <TopBar />
          <LeftBox>
            <SongList />
          </LeftBox>
          <RightBox>
            <SongDetail />
          </RightBox>
        </Grid>
      </StyledApp>
    </div>
  );
}

export default AppLayout;
