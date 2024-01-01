import { GoPlay } from "react-icons/go";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: 1rem 0 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / span 4;
`;

const StyledGoPlay = styled(GoPlay)`
  font-size: 4rem;
  color: #fff;
`;

const StyledBrandHeading = styled.h1`
  font-size: 3.2rem;
  color: #fff;
  font-family: "Diphylleia", sans-serif;
  font-weight: 400;
`;
function TopBar() {
  return (
    <StyledDiv>
      <StyledGoPlay />
      <StyledBrandHeading>songify</StyledBrandHeading>
    </StyledDiv>
  );
}

export default TopBar;
