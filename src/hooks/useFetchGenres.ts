import type {Genre} from "../model/FetchGenreTypes.ts";
import useFetchData from "./useFetchData.ts";

export default function useFetchGenres() {
    return useFetchData<Genre>("/genres", {params: {ordering: "name"}});
}