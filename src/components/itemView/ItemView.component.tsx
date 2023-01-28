import { useParams } from "react-router-dom";
import { useFetchItem } from "~/services/useFetchItem";

import * as Styles from './ItemView.styles'

export default function ItemView() {
    const { id } = useParams();
    const item = useFetchItem(id as string);
    if (!item) {
        return null;
    }

    const renderImage = () => {
        return <Styles.Image src={item?.image} />
    }

    const renderInfoItems = () => {
        return <Styles.InfoBoxesWrap>
            <Styles.InfoBox>
                <Styles.InfoBoxHeader>Address</Styles.InfoBoxHeader>
                <div>{item.address.number} {item.address.street}</div>
            </Styles.InfoBox>
        </Styles.InfoBoxesWrap>
    }

    console.log(item)
    return <Styles.Wrapper>
        {renderImage()}
        <Styles.BottomWrap>
            {renderInfoItems()}
        </Styles.BottomWrap>
    </Styles.Wrapper>
}