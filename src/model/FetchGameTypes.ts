export interface PlatformData {
    id: number
    slug: string;
    name: string;
}
export interface PlatformOuterData {
    platform: PlatformData;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number | null;
    platforms: PlatformOuterData[];
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

