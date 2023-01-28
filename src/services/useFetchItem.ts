import { IBusinessItemModel } from "~/models/businessItem.model";
import { useFetchList } from "~/services/useFetchList";

export function useFetchItem(id: string): IBusinessItemModel | null {
    const { data } = useFetchList();
    if (!data?.length) {
        return null;
    }
    return data.find((businessItem) => businessItem.id === id) || null;
}