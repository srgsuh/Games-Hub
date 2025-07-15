import {useState} from "react";
import {Button, Menu, Portal, Spinner, Text} from "@chakra-ui/react";
import useFetchPlatforms from "../../hooks/useFetchPlatforms.ts";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {defaultPlatform, type PlatformData} from "../../model/FetchGameTypes.ts";
import MotionElement from "../MotionElement/MotionElement.tsx";
import {useGameStore} from "../../data-management/store.ts";
import GenericOptionSelector from "../GenericOptionSelector/GenericOptionSelector.tsx";
import GenericMenu from "../GenericMenu/GenericMenu.tsx";
import {defaultGenre} from "../../model/FetchGenreTypes.ts";

const PlatformSelector = () => {
    const selectedPlatform = useGameStore((gs) => gs.gameQuery.selectedPlatform);
    const onSelectPlatform = useGameStore((gs) => gs.setSelectedPlatform);

    return GenericOptionSelector<PlatformData>({
        category: "platforms",
        selectedItem: selectedPlatform,
        onSelect: onSelectPlatform,
        RenderingComponent: GenericMenu<PlatformData>,
        defaultItem: defaultPlatform
    });
};

export default PlatformSelector;