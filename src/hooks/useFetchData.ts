import {useEffect, useState} from "react";
import api from "../services/api-client.ts";

import type {AxiosError, AxiosRequestConfig} from "axios";
import type {FetchDataResponse, FetchedData} from "../model/FetchDataTypes.ts";

export default function useFetchData<T>(
    endpoint: string,
    params: AxiosRequestConfig,
    deps?: ReadonlyArray<unknown>
): FetchedData<T> {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        api.get<FetchDataResponse<T>>(endpoint, params)
            .then((result) => {
                setData(result.data.results);
            })
            .catch((e: AxiosError)=>{
                console.error("Error while fetching data:", e);
                setError(`Network error: ${e.message.toLowerCase()}. Please try again later.`);
            })
            .finally(() => setIsLoading(false));
    }, deps || []);

    return {data, error, isLoading};
}

