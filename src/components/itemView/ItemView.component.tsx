import { useParams } from "react-router-dom";
import { useFetchItem } from "~/services/useFetchItem";

import * as Styles from './ItemView.styles'
import Loader from "~/components/common/loader/Loader";
import Header from "~/components/common/header/Header";
import { useFetchNearbyPlaces } from "~/services/useFetchNearbyPlaces";
import Grid from "~/components/common/grid/Grid";
import { CellModeEnum, IDataItem } from "~/components/common/grid/Grid.types";
import { BaseTheme } from "~/config/theme";
import { IBusinessItemModel } from "~/models/businessItem.model";

const CELL_HEIGHT = 40;
export default function ItemView() {
    const { id } = useParams();

    const item = useFetchItem(id as string);
    const nearbyPlacesCollection = useFetchNearbyPlaces(item?.address.city || '', item?.id || '');
    if (!item) {
        return <Styles.Wrapper><Loader /></Styles.Wrapper>;
    }

    const renderImage = () => {
        return <Styles.Image src={item?.image} />
    }

    const renderInfoItems = () => {
        const { address: { number, city, street, zip } } = item;
        const { phone, email } = item;
        return <Styles.InfoBoxesWrap>
            <Styles.InfoBox>
                <Styles.InfoBoxHeader>Address</Styles.InfoBoxHeader>
                <Styles.InfoBoxItem title={`${number} ${street}`}>{number} {street}</Styles.InfoBoxItem>
                <Styles.InfoBoxItem title={`${city} ${zip}`}>{city}, {zip}</Styles.InfoBoxItem>
            </Styles.InfoBox>

            <Styles.InfoBox>
                <Styles.InfoBoxHeader>Contact</Styles.InfoBoxHeader>
                <Styles.InfoBoxItem title={phone}>{phone}</Styles.InfoBoxItem>
                <Styles.InfoBoxItem title={email}>{email}</Styles.InfoBoxItem>
            </Styles.InfoBox>
        </Styles.InfoBoxesWrap>
    }

    const getFullAddress = (item: IBusinessItemModel) => {
        const { address } = item;
        return `${address.number} ${address.street},${address.country},${address.zip}`
    }

    const handleTransformGridData = (): IDataItem[] => {
        if (!nearbyPlacesCollection?.length) {
            return [];
        }
        return nearbyPlacesCollection.map((place) => {
            return {
                firstColumn: place.name,
                secondColumn: getFullAddress(place),
                id: place.id
            }
        })
    }

    const renderNearbyPlaces = () => {
        return <Styles.NearbyPlaces>
            <Styles.InfoBoxHeader>Nearby Places</Styles.InfoBoxHeader>
            <Styles.GridWrap>
                <Grid
                    backgroundColor={BaseTheme.colors.backgroundMain}
                    cellHeight={CELL_HEIGHT}
                    cellMode={CellModeEnum.MEDIUM}
                    data={handleTransformGridData()}
                />
            </Styles.GridWrap>
        </Styles.NearbyPlaces>
    }

    return <Styles.Wrapper>
        <Header />
        <Styles.InnerWrap>
            {renderImage()}
            <Styles.BottomWrap>
                {renderInfoItems()}
                {renderNearbyPlaces()}
            </Styles.BottomWrap>
        </Styles.InnerWrap>
    </Styles.Wrapper>
}