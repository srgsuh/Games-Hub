import {type JSX} from "react";

export interface SelectorItem {
    id: string | null;
    name: string;
    slug: string | null;
    image_background: string;
}

export interface SelectorItemProps<T extends SelectorItem> {
    items: T[] | null;
    selectedItem: T | null;
    onSelect: (item: T | null) => void;
    defaultItem: T;
    selectorBuilder?: (t: T, selected: T | null, onSelect: (t: T | null)=>void) => JSX.Element;
}