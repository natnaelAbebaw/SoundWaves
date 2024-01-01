import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { flexbox } from "styled-system";

const Row = styled.div`
  ${flexbox}
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
