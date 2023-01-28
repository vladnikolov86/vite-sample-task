import { UseQueryResult, useQuery } from "react-query";
import { MAIN_URL } from "~/config/global.config";
import { IBusinessItemModel } from "~/models/businessItem.model";
import { BusinessQueryGeneral } from "~/models/fetch.keys";

export function useFetchList(): UseQueryResult<IBusinessItemModel[]> {
    return useQuery([BusinessQueryGeneral], () => {
        return fetch(MAIN_URL).then(async (resp) => {
            const data = await resp.json();
            //Just generate some more data to demonstrate scroller
            return [...data, ...data, ...data]
        }).catch((err) => {
            console.error(err)
        })
    })
}
