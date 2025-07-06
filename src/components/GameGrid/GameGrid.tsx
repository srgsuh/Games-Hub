import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard.tsx";
import useFetchGames from "../../hooks/useFetchGames.ts";
import type {MainState} from "../../model/MainState.ts";

type GameGridProps = {
    state: MainState;
};

const GameGrid = ({state}: GameGridProps) => {
    const {data: games, error, isLoading} = useFetchGames(state);

    return (
        <>
            {isLoading && <Spinner size={"xl"} /> }
            {!error && (
                <>
                    <SimpleGrid columns={{base: 1, sm: 2, lg: 3,}}
                                gap="4"
                                maxHeight={"80vh"}
                                overflow={"auto"}
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