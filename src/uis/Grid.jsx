import styled from "@emotion/styled";
import { grid, flexbox, space } from "styled-system";
function generateFr(num) {
  let template = "";
  for (let i = 0; i < num; i++) {
    template += "1fr ";
  }
  return template;
}

const Grid = styled.div`
  display: grid;
  ${grid}
  ${space}
  ${flexbox}
  ${(props) =>
    props.columns
      ? `grid-template-columns: ${generateFr(props.columns)};`
      : `grid-template-columns: 1fr`};
  ${(props) =>
    props.rows
      ? `grid-template-rows: ${generateFr(props.rows)}`
      : `grid-template-rows: 1fr`};
`;

export default Grid;
