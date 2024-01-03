import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { flexbox, layout, space } from "styled-system";

const Row = styled.div`
  ${flexbox}
  ${space}
  ${layout}
  align-items:center;
  display: flex;
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;

Row.defaultProps = {
  gap: "2rem",
};

export default Row;
