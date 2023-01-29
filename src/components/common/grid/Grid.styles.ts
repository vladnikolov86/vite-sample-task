import styled from 'styled-components';
import { CellModeEnum } from '~/components/common/grid/Grid.types';

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
`;

export const Cell = styled.div < { backgroundColor?: string, cellMode: CellModeEnum }> `
    display: grid;
    grid-template-columns: 30% 70%;
    background-color: ${({ backgroundColor, theme: { colors } }) => backgroundColor || colors.white};
    align-items: center;
    padding-left: ${({ theme: { spacings } }) => spacings.medium};
    cursor: pointer;
    font-size: ${({ cellMode }) => cellMode === CellModeEnum.LARGE ? '1rem' : '0.9rem'};
`

