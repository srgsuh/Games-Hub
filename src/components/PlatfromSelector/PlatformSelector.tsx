import type {FC} from "react";
import {Button, Menu, Portal, Spinner, Stack, Text} from "@chakra-ui/react";
import useFetchPlatforms from "../../hooks/useFetchPlatforms.ts";
import { FaChevronDown } from "react-icons/fa";
import type {PlatformData} from "../../model/FetchGameTypes.ts";

type PlatformSelectorProps = {
    onSelectPlatform: (platform: PlatformData) => void;
    selectedPlatform: PlatformData | null;
};

const PlatformSelector:FC<PlatformSelectorProps> = ({onSelectPlatform, selectedPlatform}) => {
    const {data: platforms, isLoading, error} = useFetchPlatforms();
    return (
        <Stack direction={"row"} gap={"1"} alignItems={"center"} mb={"2"} ml={"2"}>
            {isLoading && <Spinner size={"md"}></Spinner>}
            {error? <Text color={"red"}>{error}</Text>: (
                <>
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button variant="outline" size="sm">
                            Select Platform
                            <FaChevronDown />
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content>
                                {platforms?.map((p) => (
                                    <Menu.Item
                                        key={p.id}
                                        value={p.slug}
                                        onSelect={() => onSelectPlatform(p)}>
                                        {p.name}
                                    </Menu.Item>
                                ))}
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
                <Text>{`: ${selectedPlatform?.name || "All"}`}</Text>
                </>
            )}
        </Stack>
    );
};

export default PlatformSelector;