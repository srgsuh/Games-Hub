import {useState} from "react";
import {Button, Menu, Portal} from "@chakra-ui/react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import sortOptions from "../../../config/sorting-config.json";
import MotionElement from "../MotionElement/MotionElement.tsx";
import {useGameStore} from "../../data-management/store.ts";
export type SortOption = (typeof sortOptions)[0]

const SortOrderSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOrder = useGameStore((state) => state.gameQuery.sortOrder);
    const setSortOrder = useGameStore((state) => state.setSortOrder);

    return (
        <Menu.Root open={isOpen}
                   onOpenChange={(details) => setIsOpen(details.open)}
        >
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm" minW={200}>
                    {`Order by ${selectedOrder?.label || "Relevance"}`}
                    { isOpen? <MotionElement>
                                <FaChevronUp />
                            </MotionElement>:
                            <FaChevronDown />
                    }
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <MotionElement>
                        <Menu.Content>
                            {sortOptions.map((sortOption: SortOption) => (
                                <Menu.Item
                                    key={sortOption.id}
                                    value={sortOption.id}
                                    onSelect={() => {
                                        setSortOrder(sortOption);
                                    }}>
                                    {sortOption.label}
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