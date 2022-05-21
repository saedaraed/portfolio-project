import styled from "styled-components";
export const Form = styled.form `
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  margin: 0 auto;
  text-align: left;

  input,
  textarea {
    padding: 10px;
    margin: 10px 0px;
    border-radius: 15px;
    border: solid 1px #59b2cf;
  }
  input:focus,
  textarea:focus {
    box-shadow: none;
    outline: none;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Submit = styled.input `
  background-color: #00aeff;
  cursor: pointer;
  border: none;
  color: #fff;
  /* width: 200px; */
`;