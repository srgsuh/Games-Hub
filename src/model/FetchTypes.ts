export interface Game {
    id: number;
    name: string;
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}