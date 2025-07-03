import { VStack, Text, Spinner} from "@chakra-ui/react";
import type {Genre} from "../../model/FetchGenreTypes.ts";
import useFetchGenres from "../../hooks/useFetchGenres.ts";
import GenreCard from "../GenreCard/GenreCard.tsx";

interface GenreListProps {
    onSelectGenre: (genre: string) => void;
}

const GenreList
    = ({onSelectGenre}: GenreListProps) => {
    const {data: genres, error, isLoading} = useFetchGenres();

    return (
        <>
            {isLoading && <Spinner size={"xl"} /> }
            {error? <Text>{error}</Text>: (
                <VStack maxHeight={"80vh"}
                        p={"4"}
                        overflow={"auto"}
                >
                    {genres?.map((g: Genre) => <GenreCard key={g.id} genre={g} onSelect={onSelectGenre} />)}
                </VStack>
            )
        }
        </>
    );
};

export default GenreList;