import type {GameQuery} from "../model/GameQuery.ts";

const initialState: GameQuery = {
    selectedGenre: null,
    selectedPlatform: null,
    sortOrder: null,
};

const reducer = (state: GameQuery, action: Partial<GameQuery>) => {
    return {...state, ...action};
};


export {initialState, reducer};