import { describe, expect, it, vi } from "vitest"
import ItemView from "~/components/itemView/ItemView.component";
import '@testing-library/jest-dom/extend-expect'
import { render, screen, userEvent } from "~/../test-utils";
import { IBusinessItemModel } from "~/models/businessItem.model";
import createFetchMock from 'vitest-fetch-mock';
import * as useFetchItem from "~/services/useFetchItem";


const config = {
    texts: {
        logo: 'Logo'
    }
}
const mockedDataCollection: IBusinessItemModel[] = [{
    address: {
        city: 'sofia',
        country: 'Bulgaria',
        number: '1',
        street: '22',
        zip: '1700'
    },
    description: 'test descr',
    email: 'test@mail.bg',
    id: 'test-id',
    image: 'test-image',
    name: 'Vladislav',
    phone: '+359321312'
}]

describe("Simple working test", () => {
    const fetchMock = createFetchMock(vi);
    fetchMock.enableMocks();
    fetchMock.mockResponse(() => '{"test":2}');
    it("the title is visible", () => {
        vi.spyOn(useFetchItem, "useFetchItem").mockReturnValue(mockedDataCollection[0])

        vi.mock('react-router-dom', () => ({
            ...vi.importActual('react-router-dom') as any,
            useNavigate: () => vi.fn(),
            useParams: ()=> vi.fn()
        }));
        const { getByTestId } = render(<ItemView />);
        const logoNode = getByTestId(config.texts.logo);
        expect(logoNode).toBeInTheDocument();
    });


});