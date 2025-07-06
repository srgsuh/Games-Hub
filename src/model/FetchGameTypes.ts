export interface PlatformData {
    id: string
    slug: string;
    name: string;
    image_background: string;
}
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

