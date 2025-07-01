import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard.tsx";
import useFetchGames from "../../hooks/useFetchGames.ts";

const GameGrid = () => {

    const {data: games, error} = useFetchGames();

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