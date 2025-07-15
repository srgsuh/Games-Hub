import {useState} from "react";
import {Button, Menu, Portal} from "@chakra-ui/react";
import MotionElement from "../MotionElement/MotionElement.tsx";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import config from "../../config/config.ts";
import type {SelectorItem, SelectorItemProps} from "../../model/SelectorItem.ts";

const GenericMenu = <T extends SelectorItem>({
    items,
    selectedItem,
    onSelect,
    defaultItem
}: SelectorItemProps<T>) => {

    const [isOpen, setIsOpen] = useState(false);

    const duration = config.menuOpenDuration;
    const itemList = items?.length? [defaultItem, ...items] : items;
    if (items) {
        console.log("ITEMS")
        items.forEach(console.log)
    }
    return (
        <Menu.Root open={isOpen}
                   onOpenChange={(details) => setIsOpen(details.open)}
        >
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm" minW={200}>
                    {selectedItem?.name || defaultItem?.name}
                    { isOpen? <MotionElement ><FaChevronUp /></MotionElement>
                        : <FaChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <MotionElement duration={duration}>
                        <Menu.Content>
                            {itemList?.map((item) => (
                                <Menu.Item
                                    key={item.id}
                                    value={`${item.id}`}
                                    onSelect={() => onSelect(item)}>
                                    {item.name}
                                </Menu.Item>
                            ))}
                        </Menu.Content>
                    </MotionElement>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default GenericMenu;