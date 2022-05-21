import styled from "styled-components";
export const ParentBar = styled.div `
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background-color: gray;
  overflow: hidden;
`;
export const ProgressBar = styled.div `
  margin-bottom: 10px;
  p {
    text-align: left;
  }
`;
export const ChildBar = styled.div `
  height: 100%;
  background-color: #59b2cf;

  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
`;