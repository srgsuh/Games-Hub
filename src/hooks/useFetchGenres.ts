import type {Genre} from "../model/FetchGenreTypes.ts";
import useFetchData from "./useFetchData.ts";
import type {FetchedData} from "../model/FetchDataTypes.ts";

export default function useFetchGenres(): FetchedData<Genre> {
    return useFetchData<Genre>("/genres", {params: {ordering: "name"}});
}