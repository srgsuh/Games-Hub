import type {SelectorItem, SelectorItemProps} from "../../model/SelectorItem.ts";
import useFetchSelector from "../../hooks/useFetchSelector.ts";
import type {FC, JSX} from "react";
import {Spinner, Text} from "@chakra-ui/react";

interface Props<T extends SelectorItem> {
    category: string;
    selectedItem: T | null;
    onSelect: (item: T | null) => void;
    RenderingComponent: FC<SelectorItemProps<T>>;
    defaultItem: T;
    selectorBuilder?: (t: T, selected: T | null, onSelect: (t: T | null)=>void) => JSX.Element;
}

const GenericOptionSelector = <T extends SelectorItem>({
    category,
    selectedItem,
    onSelect,
    RenderingComponent,
    defaultItem,
    selectorBuilder,
}: Props<T>) => {
    const {data: items = null, error, isLoading} = useFetchSelector<T>(category);
    if (isLoading) {
        return <Spinner size={"xl"} />;
    }
    if (error) {
        return (
            <Text color="red" fontSize={"2.5rem"}>
                {error.message}
            </Text>
        );
    }
    return (
        <RenderingComponent items = {items}
                            onSelect={onSelect}
                            selectedItem={selectedItem}
                            defaultItem={defaultItem}
                            selectorBuilder={selectorBuilder}>
        </RenderingComponent>
    );
};

export default GenericOptionSelector;