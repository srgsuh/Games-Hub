import type {SelectorItem} from "./SelectorItem";

export interface Genre extends SelectorItem {
    id: string | null;
    name: string;
    slug: string | null;
    image_background: string;
}

export const defaultGenre: Genre = {
    id: null,
    name: "All genres",
    slug: "defaultGenre-all-genres",
    image_background: "/img/any_genre.png",
};