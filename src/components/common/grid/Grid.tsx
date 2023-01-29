import { IGridProps, IRowRenderInput } from "~/components/common/grid/Grid.types";
import * as Styles from './Grid.styles';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import { useNavigate } from "react-router-dom";

const ROW_SPACING = 10;
const CELL_HEIGHT_DEFAULT = 50;
export default function Grid(props: IGridProps) {
    const { data, cellHeight = CELL_HEIGHT_DEFAULT, backgroundColor } = props;
    const navigate = useNavigate();

    const handleCellClick = (id: string) => {
        navigate(`/${id}`);
    }

    const rowRenderer = ({ index, key, style }: IRowRenderInput) => {
        const row = data[index];
        return (
            <Styles.Cell
                key={key}
                backgroundColor={backgroundColor}
                style={{ ...style, height: cellHeight - ROW_SPACING }}
                onClick={() => handleCellClick(row.id)}
            >
                <span>{row.firstColumn} </span>
                <span>{row.secondColumn}</span>
            </Styles.Cell>
        );
    };

    return <Styles.Wrapper>
        <AutoSizer>
            {({ width, height }) => (
                <List
                    height={height}
                    rowCount={data.length}
                    rowHeight={cellHeight}
                    rowRenderer={rowRenderer}
                    width={width}
                />
            )}
        </AutoSizer>
    </Styles.Wrapper>
}