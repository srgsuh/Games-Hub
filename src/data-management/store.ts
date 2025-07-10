import {create} from "zustand";
import type {PlatformData} from "../model/FetchGameTypes.ts";
import type {Genre} from "../model/FetchGenreTypes.ts";
import {type GameQuery, initialQuery} from "../model/GameQuery.ts";
import type {SortOption} from "../components/SortOrderSelector/SortOrderSelector.tsx";

interface GameStore {
    // State
    gameQuery: GameQuery;
    // Actions
    setSelectedPlatform: (platform: PlatformData | null) => void;
    setSelectedGenre: (genre: Genre | null) => void;
    setSortOrder: (sortOrder: SortOption | null) => void;
    setSearchQuery: (query: string | null) => void;
}
export const useGameStore = create<GameStore>(
    (upd) => ({
        gameQuery: initialQuery,
        setSelectedPlatform: (platform: PlatformData | null) => upd((state) =>
            ({...state, gameQuery: {...state.gameQuery, selectedPlatform: platform}})),
        setSelectedGenre: (genre: Genre | null) => upd((state)=>
                ({...state, gameQuery: {...state.gameQuery, selectedGenre: genre}})),
        setSortOrder: (sortOrder: SortOption | null) => upd((state) =>
            ({...state, gameQuery: {...state.gameQuery, sortOrder: sortOrder}})),
        setSearchQuery: (query: string | null) => upd((state) =>
            ({...state, gameQuery: {...state.gameQuery, searchQuery: query}})),
    })
);