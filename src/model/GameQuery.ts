import type {PlatformData} from "./FetchGameTypes.ts";

export type GameQuery = {
    selectedGenre: string | null;
    selectedPlatform: PlatformData | null;
    sortOrder: string | null;
};

