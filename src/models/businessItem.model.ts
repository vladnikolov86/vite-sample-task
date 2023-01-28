interface IAddressMotel{
    number: string;
    street: string;
    zip: string;
    city: string;
    country: string;
}
export interface IBusinessItemModel {
    id: string;
    name: string;
    description: string;
    phone: string;
    image: string;
    email: string;
    address: IAddressMotel;
}