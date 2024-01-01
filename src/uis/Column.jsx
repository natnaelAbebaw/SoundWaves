import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { flexbox, space } from "styled-system";
const Column = styled.div`
  ${flexbox}
  ${space}
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;

Column.defaultProps = {
  gap: "2rem",
};

export default Column;
