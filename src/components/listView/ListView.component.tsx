
import GridWrapListView from "~/components/listView/gridWrap/GridWrapListView.component";
import { useFetchList } from "~/services/useFetchList";
import * as Styles from './ListView.style';
import Loader from "~/components/common/loader/Loader";
import Header from "~/components/common/header/Header";
import { IDataItem } from "~/components/common/grid/Grid.types";
export default function ListView() {

    const { data } = useFetchList();
    const config = {
        firstColumnName: 'Name',
        secondColumnName: 'Description'
    }
    if (!data) {
        return <Styles.Wrap><Loader /></Styles.Wrap>
    }

    const { firstColumnName, secondColumnName } = config;
    const handleMapGridData = (): IDataItem[] => {
        return data.map((item) => {
            return {
                firstColumn: item.name,
                secondColumn: item.description,
                id: item.id
            }
        })
    }
    const gridWrapProps = {
        data: handleMapGridData()
    }
    return <Styles.Wrap>
        <Header />
        <GridWrapListView
            firstColumnName={firstColumnName}
            secondColumnName={secondColumnName}
            gridData={gridWrapProps}
        />
    </Styles.Wrap>

}