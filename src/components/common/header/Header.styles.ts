import styled from 'styled-components';

export const Wrap = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px 0;
    gap: ${({ theme: { spacings } }) => spacings.small};
    font-size: ${({ theme: { fonts } }) => fonts.header};
    user-select: none;
    cursor: pointer;
    background:  ${({ theme: { colors } }) => colors.white};
`