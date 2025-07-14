import {useState} from "react";
import {Button, Menu, Portal, Spinner, Text} from "@chakra-ui/react";
import useFetchPlatforms from "../../hooks/useFetchPlatforms.ts";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {anyPlatform} from "../../model/FetchGameTypes.ts";
import MotionElement from "../MotionElement/MotionElement.tsx";
import {useGameStore} from "../../data-management/store.ts";

const PlatformSelector = () => {
    const {data: platforms, isLoading, error} = useFetchPlatforms();
    const [isOpen, setIsOpen] = useState(false);
    const selectedPlatform = useGameStore((gs) => gs.gameQuery.selectedPlatform);
    const onSelectPlatform = useGameStore((gs) => gs.setSelectedPlatform);

    const platformList = platforms?.length? [anyPlatform, ...platforms] : platforms;
    return (
        <>
            {isLoading && <Spinner size={"md"}></Spinner>}
            {error? <Text color={"red"}>{error.message}</Text>: (
                <Menu.Root open={isOpen}
                           onOpenChange={(details) => setIsOpen(details.open)}
                >
                    <Menu.Trigger asChild>
                        <Button variant="outline" size="sm" minW={200}>
                            {selectedPlatform?.name || anyPlatform.name}
                            { isOpen? <MotionElement><FaChevronUp /></MotionElement>
                                : <FaChevronDown />}
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <MotionElement>
                                <Menu.Content>
                                    {platformList?.map((p) => (
                                        <Menu.Item
                                            key={p.id}
                                            value={p.slug}
                                            onSelect={() => onSelectPlatform(p)}>
                                            {p.name}
                                        </Menu.Item>
                                    ))}
                                </Menu.Content>
                            </MotionElement>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            )}
        </>
    );
};

export default PlatformSelector;