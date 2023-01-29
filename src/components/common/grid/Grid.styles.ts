import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
`;

export const Cell = styled.div < { backgroundColor?: string }> `
    display: grid;
    grid-template-columns: 30% 70%;
    background-color: ${({ backgroundColor, theme: { colors }}) => backgroundColor || colors.white};
    align-items: center;
    padding-left: ${({ theme: { spacings } }) => spacings.medium};
    cursor: pointer;
`

