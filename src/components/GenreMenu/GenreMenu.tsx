import {useState} from "react";
import useFetchGenres from "../../hooks/useFetchGenres.ts";
import {anyGenre} from "../../model/FetchGenreTypes.ts";
import {Button, Menu, Portal, Spinner, Text} from "@chakra-ui/react";
import MotionElement from "../MotionElement/MotionElement.tsx";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import config from "../../config/config.ts";
import {useGameStore} from "../../data-management/store.ts";

const GenreMenu = () => {
    const {data: genres, error, isLoading} = useFetchGenres();
    const [isOpen, setIsOpen] = useState(false);

    const duration = config.menuOpenDuration;
    const genreList = genres?.length? [anyGenre, ...genres] : genres;

    const selectedGenre = useGameStore((gs) => gs.gameQuery.selectedGenre);
    const onSelectGenre = useGameStore((gs) => gs.setSelectedGenre);

    return (
        <>
            {isLoading && <Spinner size={"md"}></Spinner>}
            {error? <Text color={"red"}>{error}</Text>: (
                <Menu.Root open={isOpen}
                           onOpenChange={(details) => setIsOpen(details.open)}
                >
                    <Menu.Trigger asChild>
                        <Button variant="outline" size="sm" minW={200}>
                            {selectedGenre?.name || anyGenre.name}
                            { isOpen? <MotionElement ><FaChevronUp /></MotionElement>
                                : <FaChevronDown />}
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <MotionElement duration={duration}>
                                <Menu.Content>
                                    {genreList?.map((g) => (
                                        <Menu.Item
                                            key={g.id}
                                            value={g.id}
                                            onSelect={() => onSelectGenre(g)}>
                                            {g.name}
                                        </Menu.Item>
                                    ))}
                                </Menu.Content>
                            </MotionElement>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            )}
        </>
    );
};

export default GenreMenu;