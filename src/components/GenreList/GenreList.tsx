import { VStack, Text, Spinner} from "@chakra-ui/react";
import type {Genre} from "../../model/FetchGenreTypes.ts";
import useFetchGenres from "../../hooks/useFetchGenres.ts";
import GenreCard from "../GenreCard/GenreCard.tsx";
import {anyGenre} from "../../model/FetchGenreTypes.ts";

interface GenreListProps {
    onSelectGenre: (genre: string | null) => void;
    selectedGenre: string | null;
}

const GenreList
    = ({onSelectGenre, selectedGenre}: GenreListProps) => {
    const {data: genres, error, isLoading} = useFetchGenres();
    const genreList = genres?.length? [anyGenre, ...genres] : genres;

    return (
        <>
            {isLoading ? <Spinner size={"xl"} />: 
            error? <Text>{error}</Text>:
            (
                <VStack maxHeight={"80vh"} p={"4"} overflow={"auto"}>
                    {genreList?.map((g: Genre) => <GenreCard
                        key={g.id}
                        genre={g}
                        onSelect={onSelectGenre}
                        isSelected={g.slug === selectedGenre}
                        />)}
                </VStack>
            )
        }
        </>
    );
};

export default GenreList;