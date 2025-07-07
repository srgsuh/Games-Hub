import type {FC} from "react";
import {useState} from "react";
import {Button, Menu, Portal, Spinner, Text} from "@chakra-ui/react";
import useFetchPlatforms from "../../hooks/useFetchPlatforms.ts";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import type {PlatformData} from "../../model/FetchGameTypes.ts";
import {anyPlatform} from "../../model/FetchGameTypes.ts";
import MotionElement from "../MotionElement/MotionElement.tsx";
import config from "../../config/config.ts";

type PlatformSelectorProps = {
    onSelectPlatform: (platform: PlatformData | null) => void;
    selectedPlatform: PlatformData | null;
};

const PlatformSelector:FC<PlatformSelectorProps> = ({onSelectPlatform, selectedPlatform}) => {
    const {data: platforms, isLoading, error} = useFetchPlatforms();
    const [isOpen, setIsOpen] = useState(false);
    const duration = config.menuOpenDuration;

    const platformList = platforms?.length? [anyPlatform, ...platforms] : platforms;
    return (
        <>
            {isLoading && <Spinner size={"md"}></Spinner>}
            {error? <Text color={"red"}>{error}</Text>: (
                <Menu.Root open={isOpen}
                           onOpenChange={(details) => setIsOpen(details.open)}
                >
                    <Menu.Trigger asChild>
                        <Button variant="outline" size="sm" minW={200}>
                            {selectedPlatform?.name || anyPlatform.name}
                            { isOpen? <MotionElement duration={duration}><FaChevronUp /></MotionElement>
                                : <FaChevronDown />}
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <MotionElement duration={duration}>
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