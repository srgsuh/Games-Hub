import {Avatar, Button, HStack} from "@chakra-ui/react";
import type {Genre} from "../../model/FetchGenreTypes.ts";

interface GenreCardProps {
    genre: Genre;
    onSelect: (genre: string) => void;
}

const GenreCard = (
    {
        genre: {
            name,
            slug,
            image_background,
        },
        onSelect,
    }: GenreCardProps) => {
    return (
        <HStack overflow={"hidden"}
                alignItems={"center"}
                border={"1px solid black"}
                borderRadius="md"
                p={4}
                width={"100%"}
        >
            <Avatar.Root size={"lg"} shape={"full"}>
                <Avatar.Fallback name={name} />
                <Avatar.Image src={image_background} alt={name} />
            </Avatar.Root>
            <Button onClick={()=>onSelect(slug)} variant={"plain"}>{name}</Button>
        </HStack>
    );
};

export default GenreCard;