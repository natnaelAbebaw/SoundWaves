import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { color, space } from "styled-system";

const Heading = styled.h1`
  ${color}
  ${space}
  text-transform:capitalize;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.2rem;
      font-weight: 700;
      margin-bottom: 1.6rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.4rem;
      font-weight: 500;
      margin-bottom: 1.4rem;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 1.2rem;
    `}
`;

export default Heading;
