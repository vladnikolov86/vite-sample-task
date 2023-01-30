import { describe, expect, it, vi } from "vitest"
import ItemView from "~/components/itemView/ItemView.component";
import '@testing-library/jest-dom/extend-expect'
import { render } from "~/../test-utils";
import { IBusinessItemModel } from "~/models/businessItem.model";
import createFetchMock from 'vitest-fetch-mock';
import * as useFetchItem from "~/services/useFetchItem";


const config = {
    texts: {
        logo: 'Logo',
        address: 'Address',
        nearby: 'Nearby Places',
        imageAlt: 'Business Image'
    },
    selectors: {
        contact: 'contact',
        address: 'address',
        cityZip: 'cityZip'
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
    image: 'http://sample.com',
    name: 'Vladislav',
    phone: '+359321312'
}]

describe("Item view tests", () => {
    const fetchMock = createFetchMock(vi);
    fetchMock.enableMocks();

    //Prevents errors in console
    fetchMock.mockResponse(() => '[{"test":2}]');
    vi.spyOn(useFetchItem, "useFetchItem").mockReturnValue(mockedDataCollection[0])

    vi.mock('react-router-dom', () => ({
        ...vi.importActual('react-router-dom') as any,
        useNavigate: () => vi.fn(),
        useParams: () => vi.fn()
    }));
    it("Should render section names properly", () => {
        vi.spyOn(useFetchItem, "useFetchItem").mockReturnValue(mockedDataCollection[0])

        vi.mock('react-router-dom', () => ({
            ...vi.importActual('react-router-dom') as any,
            useNavigate: () => vi.fn(),
            useParams: () => vi.fn()
        }));
        const { getByTestId } = render(<ItemView />);
        const logoNode = getByTestId(config.texts.logo);
        expect(logoNode).toBeInTheDocument();
        const addressNode = getByTestId(config.texts.address)
        expect(addressNode).toBeInTheDocument();
        const nearbyNode = getByTestId(config.texts.nearby)
        expect(nearbyNode).toBeInTheDocument();
    });

    it("Should render image with correct source", () => {
        const firstItem = mockedDataCollection[0];
        const { getByAltText } = render(<ItemView />);
        const imageNode = getByAltText(config.texts.imageAlt);
        expect(imageNode).toHaveAttribute('src', firstItem.image);
    });

    it("Should render contact section with correct values", () => {
        const firstItem = mockedDataCollection[0];
        const { getByTestId } = render(<ItemView />);
        const phoneNode = getByTestId(`${config.selectors.contact}-${firstItem.phone}`);
        expect(phoneNode).toBeInTheDocument();
        const emailNode = getByTestId(`${config.selectors.contact}-${firstItem.email}`);
        expect(emailNode).toBeInTheDocument();
    });

    it("Should render address section with correct values", () => {
        const firstItem = mockedDataCollection[0];
        const { address } = firstItem;
        const { getByTestId } = render(<ItemView />);
        const streetNumberNode = getByTestId(`${config.selectors.address}-${address.number} ${address.street}`);
        expect(streetNumberNode).toBeInTheDocument();
        const cityZip = getByTestId(`address-${config.selectors.cityZip}`);
        expect(cityZip).toHaveTextContent(`${address.city}, ${address.zip}`)
    });
});