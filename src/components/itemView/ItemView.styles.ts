import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${({ theme: { spacings } }) => spacings.large};
  padding-bottom: ${({ theme: { spacings } }) => spacings.medum};
`;

export const Image = styled.img`
    object-fit: cover;
    height: 200px;
`

export const BottomWrap = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    margin-top: ${({ theme: { spacings } }) => spacings.large};
    padding-left: ${({ theme: { spacings } }) => spacings.large};
`

export const InfoBoxesWrap = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const InfoBoxHeader = styled.div`
    font-weight: 500;
    font-size: ${({ theme: { fonts } }) => fonts.header};
    margin-bottom: ${({ theme: { spacings } }) => spacings.medium};
`