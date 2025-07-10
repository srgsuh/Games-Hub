import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard.tsx";
import useFetchGames from "../../hooks/useFetchGames.ts";
import {useGameStore} from "../../data-management/store.ts";

const GameGrid = () => {
    const gameQuery = useGameStore((gs) => gs.gameQuery);
    const {data: games, error, isLoading} = useFetchGames(gameQuery);

    return (
        <>
            {isLoading && <Spinner size={"xl"} /> }
            {!error && (
                <>
                    <SimpleGrid columns={{base: 1, sm: 2, lg: 3,}}
                                gap="4"
                                maxHeight={"80vh"}
                                overflow={"auto"}
                                padding={"1"}
                    >
                        {games?.map((g) => (
                            <GameCard key={g.id} game={g}/>))}
                    </SimpleGrid>
                </>
            )}
            {!!error && (<Text color={"red"}>{error}</Text>)}
        </>
    );
};

export default GameGrid;