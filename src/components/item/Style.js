import styled from "styled-components";
export const Card = styled.div `
  width: 90%;
  height: 300px;
  overflow: hidden;
  border-radius: 25px;
  position: relative;
  margin-top: 30px;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;