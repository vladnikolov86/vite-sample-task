import { CSSProperties } from "styled-components";

interface IDataItem {
    name: string;
    description: string;
    id: string;
}

export interface IGridProps {
    firstColumnName: string;
    secondColumnName: string;
    data: IDataItem[];
}

export interface IRowRenderInput {
    key: string;
    index: number;
    style: CSSProperties
}