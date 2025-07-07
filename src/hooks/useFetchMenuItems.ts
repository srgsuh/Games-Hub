import type {FetchedData} from "../model/FetchDataTypes.ts";
import type {MenuItem} from "../model/FetchMenuItem.ts";
import {useEffect, useState} from "react";
import config from "../config/config.ts";

export default function useFetchMenuItems(): FetchedData<MenuItem> {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        setIsLoading(true);
        fetch(config.sortOrderConfigPath)
            .then((response) => response.json())
            .then((data) => {console.log(data); return data;})
            .then((data) => setMenu(data))
            .catch((e: Error) => {
                console.error("Error while loading menu:", e.message);
                setError(e.message);
            })
            .finally(() => setIsLoading(false));
    },[]);
    return {data: menu, error, isLoading};
}