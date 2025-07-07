import {useEffect, useState} from "react";
import {Button, Menu, Portal} from "@chakra-ui/react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

interface MenuItem {
    label: string;
    value: string;
}

interface PlatformSelectorProps {
    onOrderSelect: (sortOrder: string | null) => void;
}

const SortOrderSelector = ({onOrderSelect}:PlatformSelectorProps) => {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [highlighted, setHighlighted] = useState<string | null>(null);

    useEffect(() => {
        fetch("/config/menu-config.json")
            .then((response) => response.json())
            .then((data) => {console.log(data); return data;})
            .then((data) => setMenu(data));
    },[]);
    return (
        <Menu.Root open={isOpen}
                   onOpenChange={(details) => setIsOpen(details.open)}
        >
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm" minW={200}>
                    {highlighted || "-- Select sort order --"}
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
                                    setHighlighted(menuItem.label);
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