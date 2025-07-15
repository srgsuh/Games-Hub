import type {Game} from "../model/FetchGameTypes.ts";
import type {GameQuery} from "../model/GameQuery.ts";
import type {AxiosRequestConfig} from "axios";
import config from "../config/config.ts";
import {useGameStore} from "../data-management/store.ts";
import useFetchData from "./useFetchData.ts";

export default function useFetchGames() {
    const gQuery = useGameStore((gs) => gs.gameQuery);
    const requestParams = stateToQueryParams(gQuery);

    return useFetchData<Game>(
        "/games",
        requestParams,
        1000*600
    );
}

function stateToQueryParams(gameQuery: GameQuery): AxiosRequestConfig {
    const platformId = gameQuery.selectedPlatform?.id;
    const genreId = gameQuery.selectedGenre?.id;
    const searchString = gameQuery.sortOrder?.searchString;
    const searchQuery = gameQuery.searchQuery;

    const genreParams= genreId? {genres: genreId}: {};
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