import type {AxiosRequestConfig} from "axios";
import type {MainState} from "../model/MainState.ts";
import config from "../config/config.ts";

export function stateToQueryParams(state: Partial<MainState>, paginate?: boolean): AxiosRequestConfig {
    const {selectedGenre, selectedPlatform} = state;
    const platformId = selectedPlatform?.id;
    const genreParams= selectedGenre? {genres: selectedGenre}: {};
    const platformParams= platformId? {parent_platforms: platformId}: {};
    const pageParams = paginate? {page_size: config.pageSize}: {};

    return {
            params: {
                ...platformParams,
                ...genreParams,
                ...pageParams
            }
    }
}

export const deps = (state: MainState): ReadonlyArray<unknown> => {
    const dependencies = [state.selectedGenre || null, state.selectedPlatform?.id || null];
    console.log("Dependencies", dependencies);
    return dependencies;
}