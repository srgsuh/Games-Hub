import type {PlatformData} from "./FetchGameTypes.ts";
import type {SortOption} from "../components/SortOrderSelector/SortOrderSelector.tsx";
import type {Genre} from "./FetchGenreTypes.ts";

export type GameQuery = {
    selectedGenre: Genre | null;
    selectedPlatform: PlatformData | null;
    sortOrder: SortOption | null;
    searchQuery: string | null;
};

export const initialQuery: GameQuery = {
    selectedGenre: null,
    selectedPlatform: null,
    sortOrder: null,
    searchQuery: null,
};
