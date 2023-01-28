import { IGridProps, IRowRenderInput } from "~/components/common/grid/Grid.types";
import * as Styles from './Grid.styles';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

const ROW_SPACING = 10;
const CELL_HEIGHT = 50;
export default function Grid(props: IGridProps) {
    const { data } = props;
    const rowRenderer = ({ index, key, style }: IRowRenderInput) => {
        const row = data[index];
        return (
            <Styles.Cell key={key} style={{ ...style, height: CELL_HEIGHT - ROW_SPACING }}>
                <span>{row.name} </span>
                <span>{row.description}</span>
            </Styles.Cell>
        );
    };
    return <Styles.Wrapper>
        <AutoSizer>
            {({ width, height }) => (
                <List
                    height={height}
                    rowCount={data.length}
                    rowHeight={CELL_HEIGHT}
                    rowRenderer={rowRenderer}
                    width={width}
                />
            )}
        </AutoSizer>
    </Styles.Wrapper>
}