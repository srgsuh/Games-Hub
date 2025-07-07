import {useState} from "react";
import {Button, Menu, Portal} from "@chakra-ui/react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import useFetchMenuItems from "../../hooks/useFetchMenuItems.ts";


interface PlatformSelectorProps {
    onOrderSelect: (sortOrder: string | null) => void;
}

const SortOrderSelector = ({onOrderSelect}:PlatformSelectorProps) => {
    const {data: menu} = useFetchMenuItems();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<string | null>(null);


    return (
        <Menu.Root open={isOpen}
                   onOpenChange={(details) => setIsOpen(details.open)}
        >
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm" minW={200}>
                    {selectedOrder || "-- Select sort order --"}
                    { isOpen? <FaChevronUp /> : <FaChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {menu?.map((menuItem, index) => (
                            <Menu.Item
                                key={index}
                                value={menuItem.value}
                                onSelect={() => {
                                    onOrderSelect(menuItem.value === "null" ? null : menuItem.value);
                                    setSelectedOrder(menuItem.label);
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