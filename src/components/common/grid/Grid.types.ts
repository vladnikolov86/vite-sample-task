import { CSSProperties } from "styled-components";

export enum CellModeEnum{
    MEDIUM = 'medium',
    LARGE = 'large'
}
export interface IDataItem {
    firstColumn: string;
    secondColumn: string;
    id: string;
}

export interface IGridProps {
    data: IDataItem[];
    cellMode?: CellModeEnum;
    cellHeight?: number;
    backgroundColor?: string;
}

export interface IRowRenderInput {
    key: string;
    index: number;
    style: CSSProperties
}