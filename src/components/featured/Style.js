import styled from "styled-components";
export const Feat = styled.div `
  display: flex;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  ul {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  ul li {
    font-size: 18px;
    font-weight: 500;
    width: 90%;
    text-align: left;
    margin-bottom: 15px;
  }
  img {
    width: 50%;
  }
  @media (max-width: 768px) {
    img {
      width: 90%;
      margin: 0 auto;
    }
    ul {
      width: 90%;
      margin: 0 auto;
    }
  }
`;