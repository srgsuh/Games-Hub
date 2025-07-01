import type {Game} from "../model/FetchGameTypes.ts";
import useFetchData from "./useFetchData.ts";

export default function useFetchGames(): {data: Game[], error: string} {
    return useFetchData<Game>("/games", {page_size: "12"});
}