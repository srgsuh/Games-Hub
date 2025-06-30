import {Box, Image, Text} from "@chakra-ui/react";

interface GameCardProps {
    name: string;
    background_image: string;
    height?: string;
    width?: string;
}

const GameCard = ({name, background_image, height}: GameCardProps) => {
    return (
        <Box>
            <Image src={background_image}
                   alt={name}
                   height={height}
            />
            <Text>{name}</Text>
        </Box>
    );
};

export default GameCard;