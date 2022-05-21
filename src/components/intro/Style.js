import styled, { keyframes } from "styled-components";
export const Introduction = styled.h2 `
  /* color: red; */
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #2e3140;
`;
export const I = styled.div `
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  /* padding-top: 50px; */
`;
export const Name = styled.h1 `
  /* color: red; */
  font-size: 60px;
  margin-bottom: 30px;
  color: #2e3140;
`;
export const Title = styled.div `
  height: 50px;
  overflow: hidden;
  padding: 20px 0px;
`;

export const TitleItem = styled.div `
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #59b2cf;
  /* background-color: red; */
  text-align: left;
`;

export const IntroLeft = styled.div `
  width: 50%;
  text-align: left;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-top: 100px;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const move = keyframes `
 0% { transform: translateY(-0px)}

 25% { transform: translateY(-50px)}
 50% {transform: translateY(-100px)}


`;
export const TitleWrapper = styled.div `
  height: 100%;
  animation: ${move} 5s ease-in-out infinite;
  /* background-color: #2be0a0 !important; */
`;
export const Description = styled.p `
  color: #000;
  margin-top: 30px;
  width: 90%;
`;
export const IntroRight = styled.div `
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    width: 80%;
    margin: 100px auto;
  }
`;
export const Shape = styled.div `
  background-color: #59b2cf;
  width: 50%;
  height: 50%;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;
export const Image = styled.img `
  width: 50%;
  height: 50%;
  border-radius: 20px;
  object-fit: cover;
  position: absolute;
  top: 30%;
  left: 30%;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    left: 10%;
    top: 15%;
  }
`;