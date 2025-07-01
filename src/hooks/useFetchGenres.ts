import type {Genre} from "../model/FetchGenreTypes.ts";
import useFetchData from "./useFetchData.ts";

export default function useFetchGenres(): {data: Genre[], error: string} {
    return useFetchData<Genre>("/genres", {ordering: "name"});
}