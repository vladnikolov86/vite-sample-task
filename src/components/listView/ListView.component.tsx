
import GridWrapListView from "~/components/listView/gridWrap/GridWrapListView.component";
import { useFetchList } from "~/services/useFetchList";
import * as Styles from './ListView.style';
import Loader from "~/components/common/loader/Loader";
export default function ListView() {

    const { data } = useFetchList();
    const config = {
        firstColumnName: 'Name',
        secondColumnName: 'Description'
    }
    if (!data) {
        return<Styles.Wrap><Loader /></Styles.Wrap> 
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