import {Box, VStack, Text} from "@chakra-ui/react";
import type {Genre} from "../../model/FetchGenreTypes.ts";
import useFetchGenres from "../../hooks/useFetchGenres.ts";

const GenreList = () => {
    const {data: genres, error} = useFetchGenres();

    return (
        <>
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