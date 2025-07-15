import type {PlatformData} from "./FetchGameTypes.ts";
import type {Genre} from "./FetchGenreTypes.ts";
import type {SelectorItem} from "./SelectorItem.ts";

export type GameQuery = {
    selectedGenre: Genre | null;
    selectedPlatform: PlatformData | null;
    sortOrder: SelectorItem | null;
    searchQuery: string | null;
};

export const initialQuery: GameQuery = {
    selectedGenre: null,
    selectedPlatform: null,
    sortOrder: null,
    searchQuery: null,
};
