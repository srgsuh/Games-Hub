import type {SelectorItem, SelectorItemProps} from "../model/SelectorItem.ts";
import {VStack} from "@chakra-ui/react";

const GenericList = <T extends SelectorItem>(
    {
        items,
        selectedItem,
        onSelect,
        defaultItem,
        selectorBuilder = () => <></>,
    }: SelectorItemProps<T>) => {
    const itemList = items?.length? [defaultItem, ...items]: items;
    return (
        <VStack maxHeight={"80vh"} p={"4"} overflow={"auto"}>
            {itemList?.map((item: T) => selectorBuilder(item, selectedItem, onSelect))}
        </VStack>
    );
};

export default GenericList;