import { CSSProperties } from "styled-components";

export interface IDataItem {
    firstColumn: string;
    secondColumn: string;
    id: string;
}

export interface IGridProps {
    data: IDataItem[];
    cellHeight?: number;
    backgroundColor?: string;
}

export interface IRowRenderInput {
    key: string;
    index: number;
    style: CSSProperties
}