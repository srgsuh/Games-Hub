import {Avatar, Button, HStack} from "@chakra-ui/react";
import type {Genre} from "../../model/FetchGenreTypes.ts";

interface GenreCardProps {
    genre: Genre;
}

const GenreCard = ({genre: {
    name,
    image_background,
}}: GenreCardProps) => {
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
            <Button variant={"plain"}>{name}</Button>
        </HStack>
    );
};

export default GenreCard;