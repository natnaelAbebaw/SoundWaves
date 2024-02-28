import styled from "@emotion/styled";

const HalfCircle = styled.div`
  width: 40rem;
  height: 20rem;
  /* border-radius: 100% 100% 0% 0%; */
  border-top-right-radius: 50% 100%;
  border-top-left-radius: 50% 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-26%, -37%) rotate(106deg);
  background-color: aliceblue;
`;

export default HalfCircle;
