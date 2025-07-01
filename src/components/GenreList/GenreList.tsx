import {Box, VStack, Text} from "@chakra-ui/react";
import type {Genre} from "../../model/FetchGenreTypes.ts";
import useFetchData from "../../hooks/useFetchData.ts";

const GenreList = () => {
    const {data: genres, error} = useFetchData<Genre>("/genres", {
        ordering: "name"
    });

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