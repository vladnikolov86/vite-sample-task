import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const InnerWrap = styled.div`
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
    grid-template-columns: 40% 60%;
    margin-top: ${({ theme: { spacings } }) => spacings.large};
    padding-left: ${({ theme: { spacings } }) => spacings.large};
    height: 100%;
`

export const InfoBoxesWrap = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
`

export const InfoBoxHeader = styled.div`
    font-weight: 500;
    font-size: ${({ theme: { fonts } }) => fonts.header};
    margin-bottom: ${({ theme: { spacings } }) => spacings.medium};
    padding: ${({ theme: { spacings } }) => spacings.medium};
`

export const InfoBoxItem = styled.div`
  padding-left: ${({ theme: { spacings } }) => spacings.medium};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const NearbyPlaces = styled.div`
    background-color: ${({ theme: { colors } }) => colors.white};
    margin: ${({ theme: { spacings } }) => `0 ${spacings.large}`};
    
`