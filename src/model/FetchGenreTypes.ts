export interface Genre {
    id: string;
    name: string;
    slug: string | null;
    image_background: string;
}

export const anyGenre: Genre = {
    id: "null",
    name: "All genres",
    slug: null,
    image_background: ""
};