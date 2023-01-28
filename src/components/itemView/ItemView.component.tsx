import { useParams } from "react-router-dom";
import { useFetchItem } from "~/services/useFetchItem";

import * as Styles from './ItemView.styles'
import Loader from "~/components/common/loader/Loader";
import Header from "~/components/common/header/Header";

export default function ItemView() {
    const { id } = useParams();
    const item = useFetchItem(id as string);
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

    const renderNearbyPlaces = () => {
        return <Styles.NearbyPlaces>
            <Styles.InfoBoxHeader>Nearby Places</Styles.InfoBoxHeader>
        </Styles.NearbyPlaces>
    }

    console.log(item)
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