import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard.tsx";
import useFetchGames from "../../hooks/useFetchGames.ts";

type GameGridProps = {
    selectedGenre: string | null;
};

const GameGrid = ({selectedGenre}: GameGridProps) => {
    const {data: games, error, isLoading} = useFetchGames(selectedGenre);

    return (
        <>
            {isLoading && <Spinner size={"xl"} /> }
            {!error && (
                <>
                    <SimpleGrid columns={{base: 1, sm: 2, md: 3,}}
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