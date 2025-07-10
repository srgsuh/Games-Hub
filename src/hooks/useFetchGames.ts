import type {Game} from "../model/FetchGameTypes.ts";
import useFetchData from "./useFetchData.ts";
import type {FetchedData} from "../model/FetchDataTypes.ts";
import type {GameQuery} from "../model/GameQuery.ts";
import type {AxiosRequestConfig} from "axios";
import config from "../config/config.ts";

export default function useFetchGames(state: GameQuery): FetchedData<Game> {
    console.log("useFetchGames ", state);
    const requestParams = stateToQueryParams(state);
    return useFetchData<Game>(
        "/games",
        requestParams,
        [state.selectedGenre, state.selectedPlatform, state.sortOrder, state.searchQuery]
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