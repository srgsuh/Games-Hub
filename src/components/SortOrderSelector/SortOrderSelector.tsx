import {useState} from "react";
import {Button, Menu, Portal} from "@chakra-ui/react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import sortOptions from "../../../config/sorting-config.json";
import MotionElement from "../MotionElement/MotionElement.tsx";
import config from "../../config/config.ts";
type SortMenuItem = (typeof sortOptions)[0]


interface PlatformSelectorProps {
    onOrderSelect: (selectedOrder: string | null) => void;
}

const SortOrderSelector = ({onOrderSelect}:PlatformSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<SortMenuItem | null>(null);
    const duration = config.menuOpenDuration;

    return (
        <Menu.Root open={isOpen}
                   onOpenChange={(details) => setIsOpen(details.open)}
        >
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm" minW={200}>
                    {`Order by ${selectedOrder?.label || "Relevance"}`}
                    { isOpen? <MotionElement duration={duration}>
                                <FaChevronUp />
                        </MotionElement>:
                        <FaChevronDown />
                    }
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <MotionElement duration={duration}>
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
                    </MotionElement>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default SortOrderSelector;