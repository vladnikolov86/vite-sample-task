import styled from "styled-components";
import { Cell } from "~/components/common/grid/Grid.styles";


export const HeaderCell = styled(Cell)`
    color: ${({ theme: { colors } }) => colors.purple};
    font-weight: 600;
    align-items: center;
    min-height: 50px;
    margin-bottom: 10px;
    cursor: initial;
    text-transform: uppercase;
`

export const Wrap = styled.div`
    padding: 40px;
    padding-bottom: 10px;
    width:90%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
`