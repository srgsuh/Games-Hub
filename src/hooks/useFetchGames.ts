import type {Game} from "../model/FetchGameTypes.ts";
import type {GameQuery} from "../model/GameQuery.ts";
import type {AxiosRequestConfig} from "axios";
import config from "../config/config.ts";
import {useGameStore} from "../data-management/store.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import type {FetchDataResponse} from "../model/FetchDataTypes.ts";

export default function useFetchGames() {
    const gQuery = useGameStore((gs) => gs.gameQuery);
    const requestParams = stateToQueryParams(gQuery);

    return useQuery<Game[], Error>({
        queryKey: ['games', JSON.stringify(requestParams)],
        queryFn: ()=>apiClient
            .get<FetchDataResponse<Game>>("/games", requestParams)
            .then(res => res.data.results),
        staleTime: 1000*600,
    })
}

function stateToQueryParams(gameQuery: GameQuery): AxiosRequestConfig {
    const platformId = gameQuery.selectedPlatform?.id;
    const genreSlug = gameQuery.selectedGenre?.slug;
    const searchString = gameQuery.sortOrder?.searchString;
    const searchQuery = gameQuery.searchQuery;

    const genreParams= genreSlug? {genres: genreSlug}: {};
    const platformParams= platformId? {parent_platforms: platformId}: {};
    const orderParams = searchString? {ordering: searchString}: {};
    const searchParams = searchQuery? {search: searchQuery}: {};

    return {
        params: {
            ...platformParams,
            ...genreParams,
            ...orderParams,
            ...searchParams,
            page_size: config.pageSize
        }
    }
}