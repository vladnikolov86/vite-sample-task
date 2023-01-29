import Grid from "~/components/common/grid/Grid";
import { IGridWrapListViewProps } from "~/components/listView/gridWrap/GridWrapListView.types";
import * as Styles from "./GridWrapListView.styles"
export default function GridWrapListView(props: IGridWrapListViewProps) {
    const { gridData: { data }, firstColumnName, secondColumnName } = props;
    return <Styles.Wrap>
        <Styles.HeaderCell>
            <span>{firstColumnName}</span>
            <span>{secondColumnName}</span>
        </Styles.HeaderCell>
        <Grid
            data={data}
        />
    </Styles.Wrap>
}