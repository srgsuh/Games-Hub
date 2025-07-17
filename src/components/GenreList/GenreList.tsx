import type {Genre} from "../../model/FetchGenreTypes.ts";
import GenreCard from "../GenreCard/GenreCard.tsx";
import {defaultGenre} from "../../model/FetchGenreTypes.ts";
import {useGameStore} from "../../data-management/store.ts";
import GenericOptionSelector from "../GenericOptionSelector/GenericOptionSelector.tsx";
import GenericList from "../../GenericList/GenericList.tsx";

const GenreList = () => {
    const selectedGenre = useGameStore((gs) => gs.gameQuery.selectedGenre);
    const onSelectGenre = useGameStore((gs) => gs.setSelectedGenre);

    const selectorBuilder = (g: Genre) => {
        return <GenreCard
                    key = {g.slug}
                    genre={g}
                    onSelect={onSelectGenre}
                    isSelected={g.id === (selectedGenre?.id || null)}>
            </GenreCard>
        }
    return GenericOptionSelector<Genre>({
        category: "genres",
        selectedItem: selectedGenre,
        onSelect: onSelectGenre,
        RenderingComponent: GenericList<Genre>,
        defaultItem: defaultGenre,
        selectorBuilder: selectorBuilder
    });
};

export default GenreList;