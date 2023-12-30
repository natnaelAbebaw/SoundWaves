import { Global, css } from "@emotion/react";

import StyledApp from "./styles/StyledApp";
import GlobalStyles from "./styles/globalStyles";
import StyledImage from "./styles/StyledImage";
import Position from "./styles/Position";

function App() {
  return (
    <div>
      <Global
        styles={css`
          ${GlobalStyles}
        `}
      />

      <StyledApp>
        <Position width={"40rem"} top={"50%"} left={"50%"}>
          <StyledImage src="vayl.png" />
          <Position width={"20rem"} top={"-10%"} left={"57%"}>
            <StyledImage src="tonearm.png" />
          </Position>
        </Position>
      </StyledApp>
    </div>
  );
}

export default App;
