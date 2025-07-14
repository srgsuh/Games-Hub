import {useQuery, type UseQueryResult} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import type {FetchDataResponse} from "../model/FetchDataTypes.ts";
import type {AxiosRequestConfig} from "axios";

export default function useFetchData<T>(
    endpoint: string,
    requestParams: AxiosRequestConfig,
    staleTime: number | "static" = "static"
): UseQueryResult<T[], Error> {
    const queryFn: () => Promise<T[]> =
        () => apiClient
        .get<FetchDataResponse<T>>(endpoint, requestParams)
        .then(res => res.data.results);
    return useQuery<T[], Error>({
        queryKey: [endpoint, JSON.stringify(requestParams)],
        queryFn,
        staleTime
    });
}

