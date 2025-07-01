import type {Game} from "../../model/FetchGameTypes.ts";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard.tsx";
import useFetchData from "../../hooks/useFetchData.ts";

const GameGrid = () => {

    const {data: games, error} = useFetchData<Game>("/games", {page_size: "12"})

    return (
        <>
            {!error && (
                <>
                    <SimpleGrid columns={{base: 1, sm: 2, md: 3,}}
                                gap="4"
                                maxHeight={"80vh"}
                                overflow={"auto"}
                    >
                        {games.map((g) => (
                            <GameCard key={g.id}
                                      game={g}
                            />))}
                    </SimpleGrid>
                </>
            )}
            {!!error && (<Text color={"red"}>{error}</Text>)}
        </>
    );
};

export default GameGrid;