import type {SelectorItem} from "../model/SelectorItem.ts";
import {apiParamsConfig} from "../config/config.ts";
import useFetchData from "./useFetchData.ts";


export default function useFetchSelector<T extends SelectorItem>(category: string) {
    const {endpoint, requestParams, staleTime} = apiParamsConfig[category];
    return useFetchData<T>(
            endpoint,
            requestParams,
            staleTime
    );
}