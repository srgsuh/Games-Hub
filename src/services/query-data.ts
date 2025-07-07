import type {AxiosRequestConfig} from "axios";
import type {GameQuery} from "../model/GameQuery.ts";
import config from "../config/config.ts";

export function stateToQueryParams(state: Partial<GameQuery>, paginate?: boolean): AxiosRequestConfig {
    const {selectedGenre, selectedPlatform, sortOrder} = state;
    const platformId = selectedPlatform?.id;
    const genreParams= selectedGenre? {genres: selectedGenre}: {};
    const platformParams= platformId? {parent_platforms: platformId}: {};
    const pageParams = paginate? {page_size: config.pageSize}: {};
    const orderParams = sortOrder? {ordering: sortOrder}: {};

    return {
            params: {
                ...platformParams,
                ...genreParams,
                ...orderParams,
                ...pageParams
            }
    }
}

export const deps = (state: GameQuery): ReadonlyArray<unknown> => {
    return [state.selectedGenre || null, state.selectedPlatform?.id || null];
}