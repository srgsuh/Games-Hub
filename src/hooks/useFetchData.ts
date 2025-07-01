import {useEffect, useState} from "react";
import api from "../services/api-client.ts";

import type {AxiosError} from "axios";
import type {FetchDataResponse} from "../model/FetchDataTypes.ts";

export default function useFetchData<T>(
    endpoint: string,
    params: Record<string, string>
): {data: T[], error: string} {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        api.get<FetchDataResponse<T>>(endpoint, {params: params})
            .then((result) => {
                setData(result.data.results);
            })
            .catch((e: AxiosError)=>{
                console.error("Error while fetching data:", e);
                setError(`Network error: ${e.message.toLowerCase()}. Please try again later.`);
            })
    }, []);

    return {data, error};
}

