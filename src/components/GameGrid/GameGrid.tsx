import api from "../../services/api-client.ts";
import type {FetchGamesResponse, Game} from "../../model/FetchTypes.ts";
import {useEffect, useState} from "react";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard.tsx";

const PAGE_SIZE = 10;

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
            <SimpleGrid>
                {games.map((g) => (
                    <GameCard key={g.id}
                              name={g.name}
                              background_image={g.background_image}
                              width={"80px"}
                              height={"80px"}
                    />))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;