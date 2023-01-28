
import GridWrapListView from "~/components/listView/gridWrap/GridWrapListView.component";
import { useFetchList } from "~/services/useFetchList";
import * as Styles from './ListView.style';
export default function ListView() {

    const { data } = useFetchList();
    const config = {
        firstColumnName: 'Name',
        secondColumnName: 'Description'
    }
    if (!data) {
        return <span>Loader</span>
    }

    const { firstColumnName, secondColumnName } = config;
    const gridWrapProps = {
        data,
        firstColumnName,
        secondColumnName
    }
    return <Styles.Wrap>
        <GridWrapListView gridData={gridWrapProps} />
    </Styles.Wrap>

}