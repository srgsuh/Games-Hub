import {useState} from "react";
import useFetchGenres from "../../hooks/useFetchGenres.ts";
import {anyGenre} from "../../model/FetchGenreTypes.ts";
import {Button, Menu, Portal, Spinner, Text} from "@chakra-ui/react";
import MotionElement from "../MotionElement/MotionElement.tsx";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import config from "../../config/config.ts";
import {useGameStore} from "../../data-management/store.ts";
import GenericOptionSelector from "../GenericOptionSelector/GenericOptionSelector.tsx";
import GenericMenu from "../GenericMenu/GenericMenu.tsx";

const GenreMenu = () => {
    const selectedGenre = useGameStore((gs) => gs.gameQuery.selectedGenre);
    const onSelectGenre = useGameStore((gs) => gs.setSelectedGenre);

    return GenericOptionSelector<Genre>({
        category: "genres",
        selectedItem: selectedGenre,
        onSelect: onSelectGenre,
        RenderingComponent: GenericMenu<Genre>,
        defaultItem: anyGenre
    });
};

export default GenreMenu;