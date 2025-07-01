import {Box, VStack, Text, Spinner} from "@chakra-ui/react";
import type {Genre} from "../../model/FetchGenreTypes.ts";
import useFetchGenres from "../../hooks/useFetchGenres.ts";

const GenreList = () => {
    const {data: genres, error, isLoading} = useFetchGenres();

    return (
        <>
            {isLoading && <Spinner size={"xl"} /> }
            {error? <Text>{error}</Text>: (
                <VStack>
                    {genres.map((g: Genre) => <Box key={g.id}>{g.name}</Box>)}
                </VStack>
            )
        }
        </>
    );
};

export default GenreList;