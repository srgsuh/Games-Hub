import type {AxiosRequestConfig} from "axios";
import type {MainState} from "../model/MainState.ts";
import config from "../config/config.ts";

export function stateToQueryParams(state: Partial<MainState>, paginate?: boolean): AxiosRequestConfig {
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

export const deps = (state: MainState): ReadonlyArray<unknown> => {
    const dependencies = [state.selectedGenre || null, state.selectedPlatform?.id || null];
    return dependencies;
}