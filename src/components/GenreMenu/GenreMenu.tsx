import {defaultGenre, type Genre} from "../../model/FetchGenreTypes.ts";
import {useGameStore} from "../../data-management/store.ts";
import GenericOptionSelector from "../GenericOptionSelector/GenericOptionSelector.tsx";
import GenericMenu from "../GenericMenu/GenericMenu.tsx";

const GenreMenu = () => {
    const selectedGenre = useGameStore((gs) => gs.gameQuery.selectedGenre);
    const onSelectGenre = useGameStore((gs) => gs.setSelectedGenre);

    return GenericOptionSelector<Genre>({
        category: "genres",
        selectedItem: selectedGenre,
        onSelect: onSelectGenre,
        RenderingComponent: GenericMenu<Genre>,
        defaultItem: defaultGenre
    });
};

export default GenreMenu;