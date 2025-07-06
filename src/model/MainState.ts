import type {PlatformData} from "./FetchGameTypes.ts";

export type MainState = {
    selectedGenre: string | null,
    selectedPlatform: PlatformData | null
};

