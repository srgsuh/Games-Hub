import type {Game} from "../model/FetchGameTypes.ts";
import useFetchData from "./useFetchData.ts";
import type {FetchedData} from "../model/FetchDataTypes.ts";
import config from "../config/config.ts";

export default function useFetchGames(genre: string | null): FetchedData<Game> {
    const params = genre? {genres: genre}: {};

    return useFetchData<Game>("/games", {params: {...params, ...{page_size: config.pageSize}}},[genre]);
}