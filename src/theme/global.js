import styled from "styled-components"

export const InnerContainer = styled.div `
width: 85%;
margin: 0 auto;
/* display: flex; */
`
export const FlexBox = styled("div")
`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const FlexRow = styled(FlexBox)
`
  flex-direction: row;
`;

export const FlexColumn = styled(FlexBox)
`
  flex-direction: column;
`;

export const InnerSection = styled(FlexColumn)
`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;