import { VStack, Text, Spinner} from "@chakra-ui/react";
import type {Genre} from "../../model/FetchGenreTypes.ts";
import useFetchGenres from "../../hooks/useFetchGenres.ts";
import GenreCard from "../GenreCard/GenreCard.tsx";
import {anyGenre} from "../../model/FetchGenreTypes.ts";
import {useGameStore} from "../../data-management/store.ts";

const GenreList = () => {
    const {data: genres, error, isLoading} = useFetchGenres();
    const genreList = genres?.length? [anyGenre, ...genres] : genres;
    const selectedGenre = useGameStore((gs) => gs.gameQuery.selectedGenre);
    const onSelectGenre = useGameStore((gs) => gs.setSelectedGenre);

    return (
        <>
            {isLoading ? <Spinner size={"xl"} />: 
            error? <Text>{error.message}</Text>:
            (
                <VStack maxHeight={"80vh"} p={"4"} overflow={"auto"}>
                    {genreList?.map((g: Genre) => <GenreCard
                        key={g.id}
                        genre={g}
                        onSelect={onSelectGenre}
                        isSelected={g.slug === selectedGenre?.slug}
                        />)}
                </VStack>
            )
        }
        </>
    );
};

export default GenreList;