import { IBusinessItemModel } from "~/models/businessItem.model";
import { useFetchList } from "~/services/useFetchList";

export function useFetchNearbyPlaces(city: string, id: string): IBusinessItemModel[] | null {
    const { data } = useFetchList();
    if (!data?.length) {
        return null;
    }
    return data.filter((businessItem) => businessItem?.address.city === city && businessItem.id !== id) || null;
}