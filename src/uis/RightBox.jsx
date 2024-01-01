import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: 3rem 3rem 0;
  /* padding: 2rem 5rem 0; */
  grid-column: 6 / span 3;
  justify-self: space-bettewn;
  position: relative;
  z-index: 1000;
`;

function LeftBox({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default LeftBox;
