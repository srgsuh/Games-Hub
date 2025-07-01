import api from "../../services/api-client.ts";
import type {FetchGamesResponse, Game} from "../../model/FetchTypes.ts";
import {useEffect, useState} from "react";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard.tsx";

const PAGE_SIZE = 12;

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        api.get<FetchGamesResponse>("/games", {params: {page_size: PAGE_SIZE}})
            .then((result) => {
                setGames(result.data.results)
                setCount(result.data.count)
            })
    }, []);

    return (
        <>
            <p>Всего игр в базе: {count}</p>
            <p>Страница: 1 из {Math.ceil(count / PAGE_SIZE)}</p>
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
    );
};

export default GameGrid;