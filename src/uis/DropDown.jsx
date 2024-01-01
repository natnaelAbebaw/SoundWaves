import styled from "@emotion/styled";

const StyledDropDown = styled.div`
  position: relative;
`;

function Dropdown({ children }) {
  return <StyledDropDown>{children}</StyledDropDown>;
}

export default Dropdown;
