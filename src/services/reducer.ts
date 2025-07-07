import type {MainState} from "../model/MainState.ts";

const initialState: MainState = {
    selectedGenre: null,
    selectedPlatform: null,
    sortOrder: null,
};

const reducer = (state: MainState, action: Partial<MainState>) => {
    const result = {...state, ...action};
    return result;
};


export {initialState, reducer};