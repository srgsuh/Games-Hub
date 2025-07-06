import type {Game} from "../model/FetchGameTypes.ts";
import useFetchData from "./useFetchData.ts";
import type {FetchedData} from "../model/FetchDataTypes.ts";
import config from "../config/config.ts";
import type {AxiosRequestConfig} from "axios";

export default function useFetchGames(genre: string | null, platformId: string | null): FetchedData<Game> {
    const genreParams= genre? {genres: genre}: {};
    const platformParams= platformId? {parent_platforms: platformId}: {};

    const requestParams:  AxiosRequestConfig = {
            params: {
                ...platformParams,
                ...genreParams,
                page_size: config.pageSize,
            }
    };
    console.log(useFetchGames, requestParams);
    return useFetchData<Game>("/games", requestParams, [genre, platformId]);
}