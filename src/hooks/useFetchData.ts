import {useEffect, useState} from "react";
import api from "../services/api-client.ts";

import type {AxiosError} from "axios";
import type {FetchDataResponse, FetchedData} from "../model/FetchDataTypes.ts";

export default function useFetchData<T>(
    endpoint: string,
    params: Record<string, string>
): FetchedData<T> {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        api.get<FetchDataResponse<T>>(endpoint, {params: params})
            .then((result) => {
                setData(result.data.results);
            })
            .catch((e: AxiosError)=>{
                console.error("Error while fetching data:", e);
                setError(`Network error: ${e.message.toLowerCase()}. Please try again later.`);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return {data, error, isLoading};
}

