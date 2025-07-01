import type {Game} from "../model/FetchGameTypes.ts";
import useFetchData from "./useFetchData.ts";
import type {FetchedData} from "../model/FetchDataTypes.ts";

export default function useFetchGames(): FetchedData<Game> {
    return useFetchData<Game>("/games", {page_size: "12"});
}