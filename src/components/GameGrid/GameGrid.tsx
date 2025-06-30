import api from "../../services/api-client.ts";
import type {FetchGamesResponse, Game} from "../../model/FetchTypes.ts";
import {useEffect, useState} from "react";

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
            <ul>
                {games?.map( (game ) => (<li key = {game.id}>{game.name}</li>))}
            </ul>
        </>
    );
};

export default GameGrid;