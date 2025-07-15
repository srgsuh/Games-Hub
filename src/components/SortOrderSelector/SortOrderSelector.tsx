import sortOptions from "../../../config/sorting-config.json";
import {useGameStore} from "../../data-management/store.ts";
import type {SelectorItem} from "../../model/SelectorItem.ts";
import GenericMenu from "../GenericMenu/GenericMenu.tsx";
export type SortOption = (typeof sortOptions)[0]

const toSelectorItem = (opt: SortOption): SelectorItem => {
    return {
        id: opt.searchString,
        name: opt.label,
        slug: opt.id,
        image_background: opt.id
    };
}

const sortSelectorItems: SelectorItem[] = sortOptions.map(toSelectorItem);

const SortOrderSelector = () => {
    const selectedOrder = useGameStore((state) => state.gameQuery.sortOrder);
    const setSortOrder = useGameStore((state) => state.setSortOrder);

    const [defaultItem, ...otherItems] = sortSelectorItems;

    return <GenericMenu<SelectorItem>
            items={otherItems}
            selectedItem={selectedOrder}
            onSelect={setSortOrder}
            defaultItem={defaultItem}>
    </GenericMenu>
};

export default SortOrderSelector;