import api from "../../services/api-client.ts";
import type {FetchGamesResponse, Game} from "../../model/FetchTypes.ts";
import {useEffect, useState} from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard.tsx";
import { Spinner } from "@chakra-ui/react"
import type {AxiosError} from "axios";

const PAGE_SIZE = 12;

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [count, setCount] = useState<number>(0);
    const [state, setState] = useState<"waiting"|"success"|"fail">("waiting");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.get<FetchGamesResponse>("/x2games", {params: {page_size: PAGE_SIZE}})
            .then((result) => {
                setState("success");
                setGames(result.data.results);
                setCount(result.data.count);
                setError(null);
            })
            .catch((e: AxiosError)=>{
                console.error("Error while fetching data:", e);
                setState("fail");
                setError(`Network error: ${e.message.toLowerCase()}. Please try again later.`);
            })
    }, []);

    return (
        <>
            {state === "waiting" && (<Spinner size={"xl"} />)}
            {state === "success" && (
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
            )}
            {state === "fail" && (<Text color={"red"}>{error}</Text>)}
        </>
    );
};

export default GameGrid;