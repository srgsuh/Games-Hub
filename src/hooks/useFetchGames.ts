import type {Game} from "../model/FetchGameTypes.ts";
import useFetchData from "./useFetchData.ts";
import type {FetchedData} from "../model/FetchDataTypes.ts";
import type {GameQuery} from "../model/GameQuery.ts";
import {stateToQueryParams} from "../services/query-data.ts";

export default function useFetchGames(state: GameQuery): FetchedData<Game> {
    const requestParams = stateToQueryParams(state, true);
    return useFetchData<Game>(
        "/games",
        requestParams,
        [state.selectedGenre, state.selectedPlatform, state.sortOrder]
    );
}