import type {FC} from "react";
import {useState} from "react";
import useFetchGenres from "../../hooks/useFetchGenres.ts";
import {anyGenre} from "../../model/FetchGenreTypes.ts";
import {Button, Menu, Portal, Spinner, Text} from "@chakra-ui/react";
import MotionElement from "../MotionElement/MotionElement.tsx";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import config from "../../config/config.ts";


interface Props {
    onSelectGenre: (genre: string | null) => void;
    selectedGenre: string | null;
}

const GenreMenu: FC<Props> = ({onSelectGenre, selectedGenre}) => {
    const {data: genres, error, isLoading} = useFetchGenres();
    const [isOpen, setIsOpen] = useState(false);

    const duration = config.menuOpenDuration;
    const genreList = genres?.length? [anyGenre, ...genres] : genres;

    return (
        <>
            {isLoading && <Spinner size={"md"}></Spinner>}
            {error? <Text color={"red"}>{error}</Text>: (
                <Menu.Root open={isOpen}
                           onOpenChange={(details) => setIsOpen(details.open)}
                >
                    <Menu.Trigger asChild>
                        <Button variant="outline" size="sm" minW={200}>
                            {selectedGenre || anyGenre.name}
                            { isOpen? <MotionElement duration={duration}><FaChevronUp /></MotionElement>
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
                                            onSelect={() => onSelectGenre(g.slug)}>
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