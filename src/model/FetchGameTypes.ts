import type {SelectorItem} from "./SelectorItem";

export interface PlatformData extends SelectorItem {
    id: string
    slug: string | null;
    name: string;
    image_background: string;
}

export const anyPlatform: PlatformData = {
    id: "",
    slug: "all-platforms",
    name: "All platforms",
    image_background: "../assets/all_platforms.svg",
};

export interface PlatformOuterData {
    platform: PlatformData;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number | null;
    rating: number;
    parent_platforms: PlatformOuterData[];
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

