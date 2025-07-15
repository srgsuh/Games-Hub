import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard.tsx";
import useFetchGames from "../../hooks/useFetchGames.ts";

const GameGrid = () => {
    const {data: games, error, isLoading} = useFetchGames();

    return (
        <>
            {isLoading && <Spinner size={"xl"} /> }
            {!error && (
                <SimpleGrid columns={{base: 1, sm: 2, lg: 3, "2xl": 5}}
                            gap="4"
                            maxHeight={"80vh"}
                            overflow={"auto"}
                            padding={"1"}
                >
                    {games?.map((g) => (
                        <GameCard key={g.id} game={g}/>))}
                </SimpleGrid>
            )}
            {!!error && (<Text color={"red"}>{error.message}</Text>)}
        </>
    );
};

export default GameGrid;