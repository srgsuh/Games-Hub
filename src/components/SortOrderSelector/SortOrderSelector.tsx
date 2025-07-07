import {useState} from "react";
import {Button, Menu, Portal} from "@chakra-ui/react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import sortOptions from "../../../config/sorting-config.json";
type SortMenuItem = (typeof sortOptions)[0]


interface PlatformSelectorProps {
    onOrderSelect: (selectedOrder: string | null) => void;
}

const SortOrderSelector = ({onOrderSelect}:PlatformSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<SortMenuItem | null>(null);


    return (
        <Menu.Root open={isOpen}
                   onOpenChange={(details) => setIsOpen(details.open)}
        >
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm" minW={200}>
                    {selectedOrder?.label || "Relevance"}
                    { isOpen? <FaChevronUp /> : <FaChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortOptions.map((menuItem: SortMenuItem) => (
                            <Menu.Item
                                key={menuItem.value}
                                value={menuItem.value}
                                onSelect={() => {
                                    onOrderSelect(menuItem.value);
                                    setSelectedOrder(menuItem);
                                }}>
                                {menuItem.label}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default SortOrderSelector;