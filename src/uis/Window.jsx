import styled from "@emotion/styled";

const StyledWindow = styled.div`
  position: absolute;
  left: -4rem;
  background-color: var(--color-grey-700);
  padding: 5px;
  border-radius: 5px;
  z-index: 10000;
`;

function Window({ children, refs }) {
  return <StyledWindow ref={refs}>{children}</StyledWindow>;
}

export default Window;
