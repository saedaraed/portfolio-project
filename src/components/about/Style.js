import styled from "styled-components";
import { FlexBox, FlexColumn, FlexRow } from "../../theme/global";

export const AboutInf = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export const AboutMe = styled.h2 `
  color: #00aeff;
  margin-bottom: 50px;
  border-left: #00aeff solid 5px;
  text-align: left;
  padding-left: 10px;
`;

export const AboutLeft = styled.div `
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const AboutRight = styled.div `
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const PersonalInformation = styled.div `
  display: flex;
  flex-direction: column;
`;
export const Information = styled.div `
  font-size: 16px;
  border-bottom: solid 1px #000;
  margin-bottom: 50px;
  width: 90%;
  display: flex;
  align-items: center;

  label {
    color: #59b2cf;
    font-weight: bold;
    margin: 0 10px;
  }
`;