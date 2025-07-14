import type {Genre} from "../model/FetchGenreTypes.ts";
import type {FetchDataResponse} from "../model/FetchDataTypes.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";

export default function useFetchGenres() {
    const params = {params: {ordering: "name"}};
    return useQuery<Genre[], Error>({
        queryKey: ['genre'],
        queryFn: () => apiClient.get<FetchDataResponse<Genre>>("/genres", params)
            .then(res => res.data.results),
        staleTime: "static",
    });
}