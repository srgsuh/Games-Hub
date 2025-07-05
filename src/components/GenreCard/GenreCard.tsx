import {Avatar, Button, HStack} from "@chakra-ui/react";
import type {Genre} from "../../model/FetchGenreTypes.ts";
import {useColorModeValue} from "../ui/color-mode.tsx";

interface GenreCardProps {
    genre: Genre;
    isSelected: boolean;
    onSelect: (genre: string) => void;
}

const GenreCard = (
    {
        genre: {
            name,
            slug,
            image_background,
        },
        isSelected,
        onSelect,
    }: GenreCardProps) => {
    const bgColorNormal = useColorModeValue("white","black");
    const bgColorSelected = useColorModeValue("green.300","green");
    const color  = useColorModeValue("black","white");
    return (
        <HStack overflow={"hidden"}
                alignItems={"center"}
                border={"1px solid black"}
                borderRadius="md"
                p={4}
                width={"100%"}
                bg={isSelected ? bgColorSelected: bgColorNormal}
                onClick={()=>onSelect(slug)}
                cursor={"pointer"}
        >
            <Avatar.Root size={"lg"} shape={"full"}>
                <Avatar.Fallback name={name} />
                <Avatar.Image src={image_background} alt={name} />
            </Avatar.Root>
            <Button variant={"plain"}
                    color={color}
                    fontWeight={isSelected ? "bold": "normal"}>{name}</Button>
        </HStack>
    );
};

export default GenreCard;