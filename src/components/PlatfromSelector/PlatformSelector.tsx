import {defaultPlatform, type PlatformData} from "../../model/FetchGameTypes.ts";
import {useGameStore} from "../../data-management/store.ts";
import GenericOptionSelector from "../GenericOptionSelector/GenericOptionSelector.tsx";
import GenericMenu from "../GenericMenu/GenericMenu.tsx";

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