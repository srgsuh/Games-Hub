export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export interface GenresFetchResponse {
    count: number;
    results: Genre[];
}