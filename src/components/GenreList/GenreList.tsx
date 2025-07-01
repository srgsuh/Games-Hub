import {useState} from "react";
import api from "../../services/api-client.ts";
import {Box, VStack} from "@chakra-ui/react";
import type {Genre, GenresFetchResponse} from "../../model/FetchGenreTypes.ts";

const GenreList = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    api.get<GenresFetchResponse>("/genres", {
        params: {
            page_size: 20,
            ordering: "name"
        }
    })
        .then(r => setGenres(r.data.results))
        .catch(e => {
            console.error(e);
        });
    ;

    return (
        <VStack>
            {genres.map((g: Genre) => <Box key={g.id}>{g.name}</Box>)}
        </VStack>
    );
};

export default GenreList;