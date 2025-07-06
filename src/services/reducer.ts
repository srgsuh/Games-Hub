import type {MainState} from "../model/MainState.ts";

const initialState: MainState = {
    selectedGenre: null,
    selectedPlatform: null
};

const reducer = (state: MainState, action: Partial<MainState>) => {
    console.log("Reducer state", state);
    console.log("Reducer action", action);
    const result = {...state, ...action};
    console.log("Reducer result", result);
    return result;
};


export {initialState, reducer};