import type {Game} from "../model/FetchGameTypes.ts";
import useFetchData from "./useFetchData.ts";
import type {FetchedData} from "../model/FetchDataTypes.ts";
import type {GameQuery} from "../model/GameQuery.ts";
import type {AxiosRequestConfig} from "axios";
import config from "../config/config.ts";
import {useGameStore} from "../data-management/store.ts";

export default function useFetchGames(): FetchedData<Game> {
    const gQuery = useGameStore((gs) => gs.gameQuery);
    const requestParams = stateToQueryParams(gQuery);
    return useFetchData<Game>(
        "/games",
        requestParams,
        [gQuery.selectedGenre, gQuery.selectedPlatform, gQuery.sortOrder, gQuery.searchQuery]
    );
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