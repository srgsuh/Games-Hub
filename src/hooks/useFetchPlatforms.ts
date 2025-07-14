import type {PlatformData} from "../model/FetchGameTypes.ts";
import type {FetchDataResponse} from "../model/FetchDataTypes.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";

export default function useFetchPlatforms() {
    const params = {params: {ordering: "slug"}};
    return useQuery<PlatformData[], Error>({
        queryKey: ['platform'],
        queryFn: () => apiClient.get<FetchDataResponse<PlatformData>>("/platforms/lists/parents", params)
            .then(res => res.data.results),
        staleTime: "static",
    });
}