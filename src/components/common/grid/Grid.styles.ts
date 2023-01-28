import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
`;

export const Cell = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    background-color: ${({ theme: { colors } }) => colors.white};
    align-items: center;
    padding-left: ${({ theme: { spacings } }) => spacings.medium};
    cursor: pointer;
`

