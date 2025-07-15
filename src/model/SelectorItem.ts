export interface SelectorItem {
    id: string;
    name: string;
    slug: string | null;
    image_background: string;
}

export interface SelectorItemProps<T extends SelectorItem> {
    items: T[];
    selectedItem: T | null;
    onSelect: (item: T | null) => void;
    defaultItem?: T;
}